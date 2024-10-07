import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import Logo from './Logo';
import {signInWithGoogle} from "../../firebase-config.js";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMouseEnter = () => {
        if (window.innerWidth >= 1250) {
            setDropdown(true);
        }
    };

    const handleMouseLeave = () => {
        setDropdown(false);
    };
    const handleLogin = async () => {
        console.log("presssssss");
        await signInWithGoogle();
        window.location.href = "/my_music"; // Redirect after login
    };


    return (
        <nav className="bg-white px-4 py-5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex space-x-8 items-center">
                    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <p className="cursor-pointer hover:font-bold">Articles & Resources</p>
                        {dropdown && <DropdownMenu />}
                    </div>
                    <p className="cursor-pointer hover:font-bold">Meditation</p>
                    <p className="cursor-pointer hover:font-bold">Mindfulness</p>
                    <p className="cursor-pointer hover:font-bold">Articles</p>
                    <p className="cursor-pointer hover:font-bold">Resources</p>
                    <p className="cursor-pointer hover:font-bold">About</p>
                    <p className="cursor-pointer hover:font-bold">Help</p>
                    <p className="cursor-pointer hover:font-bold" onClick={() => navigate("/my_music")}>My Headspace</p>
                    <button  onClick={handleLogin} className="bg-blue-700 text-white rounded-full py-2 px-5 cursor-pointer hover:bg-blue-800">
                        Try for free
                    </button>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4">
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Articles & Resources</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Meditation</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Mindfulness</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Articles</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Resources</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">About</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100">Help</p>
                    <p className="py-2 cursor-pointer hover:bg-gray-100" onClick={() => navigate("/my_music")}>My Headspace</p>
                    <button onClick={handleLogin} className="w-full bg-blue-700 text-white rounded-full py-2 px-5 cursor-pointer hover:bg-blue-800 mt-4">
                        Try for free
                    </button>
                </div>
            )}
        </nav>
    );
}
