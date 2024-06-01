
import React, { useStatev, } from 'react';

const Header = () => {

    return (
        <div>
            <div className="max-w-screen-2xl bg-emerald-500 mx-auto px-3 sm:px-10">
                <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
                    <a href="/" className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block">
                        <div className="relative w-32 h-10">
                            <img alt="logo" fetchpriority="high" width="0" height="0" decoding="async"
                                data-nimg="1" className="w-full h-auto"
                                src="https://res.cloudinary.com/ahossain/image/upload/v1697687802/settings/logo-light_hls14v.svg"
                                style={{ color: "transparent;" }} />
                        </div>
                    </a>

                    <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
                        <div className="w-full flex flex-col justify-center  flex-shrink-0 relative z-30">
                            <div className="flex flex-col mx-auto w-full">
                                <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                                    <label className="flex items-center py-0.5">
                                        <input className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input
                                         text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none
                                          border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                                            placeholder="Search for products (e.g. fish, apple, oil)" value="" />
                                    </label>
                                    <button aria-label="Search" type="submit"
                                        className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" stroke-miterlimit="10" stroke-width="32"
                                                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                                            <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                                                d="M338.29 338.29L448 448"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="pr-5 text-white text-2xl font-bold" aria-label="Alert">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" className="w-6 h-6 drop-shadow-xl" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </button>

                        <button aria-label="Total" className="relative px-5 text-white text-2xl font-bold">
                            <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">0</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" className="w-6 h-6 drop-shadow-xl" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </button>

                        <button className="pl-5 text-white text-2xl font-bold" aria-label="Login">
                            <span>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round" className="w-6 h-6 drop-shadow-xl" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
