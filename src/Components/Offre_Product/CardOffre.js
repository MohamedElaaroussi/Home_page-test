import React from 'react';
import Pic1 from "../../assete/oiseau.jpg"

const CardOffre = () => {
    return (
        <div>
            <div className="bg-gray-50 lg:py-6 py-2 mx-auto max-w-screen-2xl  sm:px-10">
                <div className="flex">
                    <div className='w-full'>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-3">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div className={`group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative ${index === 10 || index === 11 ? 'justify-center' : ''}`} key={index}>
                                    <div className="w-full flex justify-between">
                                        <span className="bg-gray-100 absolute z-10 text-green-500 rounded-full text-xs px-2 py-0 font-medium">
                                            Stock :
                                            <span className="text-orange-700 pl-1 font-bold">
                                                5472
                                            </span>
                                        </span>
                                        {index % 2 === 0 ? (
                                            <span className="absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-0 top-0">
                                                8.56 % Off
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="relative flex justify-center cursor-pointer pt-5 w-full h-44">
                                        <div className="relative w-full h-full p-2">
                                            <img
                                                src={Pic1}
                                                alt="product"
                                                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"
                                                style={{
                                                    position: 'absolute',
                                                    height: '100%',
                                                    width: '100%',
                                                    inset: '0px',
                                                    objectFit: 'contain',
                                                    color: 'transparent',
                                                }}
                                                sizes="100%"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                                        <div className="relative mb-1">
                                            <span className="text-gray-400 font-medium text-xs d-block mb-1">
                                            </span>
                                            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                                                <span className="line-clamp-2">
                                                    Himalaya Powder
                                                </span>
                                            </h2>
                                        </div>
                                        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                                            <div className="font-serif product-price font-bold">
                                                <span className="inline-block text-lg font-semibold text-gray-800">
                                                    $160.00</span>
                                                <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                                                    $174.97</del>
                                            </div>
                                            <button aria-label="cart" className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
                                                <span className="text-xl">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em"
                                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M460 160h-88v-12A116.13 116.13 0 00258.89
         32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 
         00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm156 187h-64v64h-32v-64h-64
         v-32h64v-64h32v64h64z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardOffre;
