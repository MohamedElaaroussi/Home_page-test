import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
    const MyContext = React.createContext();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <div className="hidden lg:block xl:block bg-white border-b">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
                    <div className="inline-flex">
                        <div className="relative" data-headlessui-state="">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                                    <nav className="md:flex space-x-10 items-center">
                                        <div className="relative font-serif" data-headlessui-state="">
                                            <button className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none"
                                                type="button" aria-expanded="false" data-headlessui-state=""
                                                id="headlessui-popover-button-:r0:">
                                                <span className="font-serif text-sm font-medium">Categories</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                                    className="ml-1 h-3 w-3 group-hover:text-emerald-600">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <a className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                                            href="/about-us">About Us</a>
                                        <a className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                                            href="/contact-us">Contact Us</a>
                                        <div className="relative font-serif" data-headlessui-state="">
                                            <button className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none"
                                                type="button" aria-expanded="false" data-headlessui-state=""
                                                id="headlessui-popover-button-:r2:">
                                                <span>Pages</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                                    className="ml-1 h-3 w-3 group-hover:text-emerald-600">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <a className="relative inline-flex items-center  bg-red-100 font-serif ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                                            href="/offer">Offers
                                            <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                                                <span
                                                    className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                            </div>
                                        </a>
                                    </nav>
                                    <div
                                        style={{
                                            position: "fixed",
                                            top: "1px",
                                            left: "1px",
                                            width: "1px",
                                            height: "0px",
                                            padding: "0px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            whiteSpace: "nowrap",
                                            borderWidth: "0px",
                                            display: "none"
                                        }}

                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                position: "fixed",
                                top: "1px",
                                left: "1px",
                                width: "1px",
                                height: "0px",
                                padding: "0px",
                                margin: "-1px",
                                overflow: "hidden",
                                clip: "rect(0px, 0px, 0px, 0px)",
                                whiteSpace: "nowrap",
                                borderWidth: "0px",
                                display: "none"
                            }}
                        >
                        </div>
                    </div>

                    <div className="flex">







                        <button
                            id="dropdownMenuIconButton"
                            classNameName="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <svg classNameName="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div
                                id="dropdownDots"
                                classNameName="z-10 bg-white divide-y divide-gray-100 rounded-lg 
                                shadow w-auto dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul>
                                    <li><a href={'/'}><li>Arabic</li></a></li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href={'/'}><li>English</li></a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href={'/'}><li>Francais</li></a>
                                    </li>
                                </ul>
                            </div>
                        )}










                        <a className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600" href="/privacy-policy">
                            Privacy Policy</a>
                        <a className="font-serif mx-4 py-2 text-sm font-medium hover:text-emerald-600" href="/terms-and-conditions">
                            Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Title;
