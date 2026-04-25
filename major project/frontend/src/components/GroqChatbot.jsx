import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaLocationArrow, FaStethoscope, FaUserAlt, FaRedo } from 'react-icons/fa';
import { GoogleGenAI } from "@google/genai";
import './GroqChatbot.css';

const GEMINI_API_KEY = "AIzaSyCIyJ-ZRJRvyKC6OSz0YpexDAYrrFNSj-c";
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-groq-chat', handleOpenChat);
    return () => window.removeEventListener('open-groq-chat', handleOpenChat);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now(), role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const requestContents = messages.map(m => ({
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
          systemInstruction: "You are MediBot, a highly advanced, empathetic, and professional AI assistant. While you specialize in medical and health-related advice, you should also happily and accurately answer general knowledge queries on any topic. Be concise, helpful, and use Markdown for formatting (like **bold** for emphasis or bullet points). If the user asks a medical question, include a brief disclaimer to consult a doctor."
        }
      });

      const botResponse = response.text;

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
            <div className="groq-chatbot-messages">
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
