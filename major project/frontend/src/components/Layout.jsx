import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ user, setShowEmergency }) {
    return (
    <>
        <Navbar user={user} setShowEmergency={setShowEmergency} />
        <Outlet />
    </>
    );
}