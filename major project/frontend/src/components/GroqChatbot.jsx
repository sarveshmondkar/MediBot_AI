/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaLocationArrow, FaStethoscope, FaUserAlt, FaRedo } from 'react-icons/fa';
import { GoogleGenAI } from "@google/genai";
import './GroqChatbot.css';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default function GroqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I am MediBot, your advanced AI health assistant. How can I help you today? \n\n*(Disclaimer: I provide information, not medical diagnoses. Always consult a doctor for serious concerns)*"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  useEffect(() => {
    if (isNearBottom()) {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, ]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-groq-chat', handleOpenChat);
    return () => window.removeEventListener('open-groq-chat', handleOpenChat);
  }, []);

  const messagesContainerRef = useRef(null);

  const isNearBottom = () => {
    const el = messagesContainerRef.current;
    if (!el) return true;

    return el.scrollHeight - el.scrollTop - el.clientHeight < 100;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now(), role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const recentMessages = messages.slice(-6); // last 6 only

      const requestContents = recentMessages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));
      
      requestContents.push({
        role: 'user',
        parts: [{ text: userMsg.content }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: requestContents,
        config: {
          systemInstruction: `
            You are MediBot, a friendly, empathetic AI health assistant.

            Your goals:
            - Speak naturally like a caring human, NOT like a robotic assistant
            - Be warm, reassuring, and conversational
            - Avoid repeating phrases like "I understand you're asking"
            - Give clear, helpful responses in simple language

            For symptom-related queries:
            1. Acknowledge the user's feeling naturally
            2. Suggest possible common causes (not diagnoses)
            3. Give practical next steps
            4. Mention when to see a doctor (only if needed)

            Keep responses:
            - Short to medium length
            - Easy to read
            - Supportive, not scary

            DO NOT:
            - Sound robotic or overly formal
            - Repeat the user’s question
            - Give generic fallback responses

            Example tone:
            "That sounds uncomfortable 😕 dizziness can happen for a few simple reasons like dehydration or low blood sugar..."

            Always include a short medical disclaimer ONLY when giving health-related advice.
            `
        }
      });

      const cleanResponse = (text) => {
        return text
          .replace(/I understand.*?\./gi, '')
          .replace(/As an AI.*?\./gi, '')
          .trim();
      };  
      const botResponse = cleanResponse(response.text);

      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: botResponse }
      ]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: `⚠️ Connection Issue: ${err.message}. Please check your API key or network.` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const formatMessageContent = (text) => {
    // Basic Markdown to HTML parsing for bold and newlines
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Split by newlines and map to paragraphs
    return formattedText.split('\n').map((line, idx) => {
      // Very basic bullet point parsing
      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return <li key={idx} dangerouslySetInnerHTML={{ __html: line.substring(2) }} />;
      }
      return <p key={idx} dangerouslySetInnerHTML={{ __html: line || '<br/>' }} />;
    });
  };

  const resetChat = () => {
    setMessages([{
      id: Date.now(),
      role: 'assistant',
      content: "Chat history cleared. How can I assist you?"
    }]);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="groq-chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="groq-chatbot-header">
              <div className="header-title">
                <div className="bot-avatar-container">
                  <span className="bot-icon">🤖</span>
                </div>
                <h3>MediBot</h3>
              </div>
              <div className="header-actions">
                <span className="pulsing-dot"></span>
                <button title="Reset Chat" onClick={resetChat} className="action-btn">
                  <FaRedo />
                </button>
                <button title="Close" onClick={() => setIsOpen(false)} className="action-btn">
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="groq-chatbot-messages" ref={messagesContainerRef}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`groq-message-wrapper ${msg.role === 'user' ? 'user' : 'assistant'}`}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {msg.role === 'assistant' && (
                    <div className="msg-avatar bot"><FaStethoscope /></div>
                  )}
                  <div className="groq-message-bubble">
                    {formatMessageContent(msg.content)}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  className="groq-message-wrapper assistant"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="msg-avatar bot"><FaStethoscope /></div>
                  <div className="groq-message-bubble loading-bubble">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="groq-chatbot-input">
              <input
                type="text"
                placeholder="Describe your symptoms..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <motion.button
                className="send-btn"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="groq-chat-trigger-small"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="trigger-icon-wrapper-small">
              <span role="img" aria-label="bot">🤖</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
