import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout({ user, setShowEmergency }) {
    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/signup'];
    return (
    <>
           {!hideNavbarRoutes.includes(location.pathname) && <Navbar user={user} setShowEmergency={setShowEmergency} />}
        <Outlet />
    </>
    );
}