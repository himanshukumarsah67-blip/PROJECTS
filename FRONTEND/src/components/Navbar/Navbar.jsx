import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const [Register, setRegister] = useState(true);
    const [Login,setLogin] = useState(true);

    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-amber-600">

            {/* Logo */}
            <div className="text-2xl font-bold text-cyan-800">
                <h1>shopZone</h1>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="/"
                        className="text-gray-700 hover:text-cyan-700 transition duration-200"
                    >
                        Home
                    </a>

                    <a
                        href="/"
                        className="text-gray-700 hover:text-cyan-700 transition duration-200"
                    >
                        Man
                    </a>

                    <a
                        href="/"
                        className="text-gray-700 hover:text-cyan-700 transition duration-200"
                    >
                        Women
                    </a>

                    <a href="/"
                        className="text-gray-700 hover:text-cyan-700 transition duration-200">
                     Unisex
                    </a>
                </div>

                
                
    

                {/* Register Button */}
                {Register && (
                    <div>
                        <button
                            className="px-5 py-2 bg-cyan-700 text-white rounded-md font-medium hover:bg-cyan-800 transition duration-200"
                        >
                            Register
                        </button>
                    </div>
                )}


                {/*Login Button */}
                {Login && (
                    <div>
                        <button className="px-3 py-2 bg-red-700 text-white rounded-md font-medium ">
                            Login
                        </button>
                    </div>
                )}


                {/* Cart */}

                <div className="relative">
                      <FontAwesomeIcon  icon={faCartShopping} />
                      <span className="text-white absolute -top-3 -right-3 bg-red-800 text-xs rounded-full px-2 py-1">0</span>
                </div>

            </div>
        </nav>
    );
};