import React from 'react'

export default function Categorie() {
    return (
        <div>
            <div className="bg-gray-100 lg:py-16 py-10">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                    <div className="mb-10 flex justify-center">
                        <div className="text-center w-full lg:w-2/5">
                            <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                                Featured Categories
                            </h2>
                            <p className="text-base font-sans text-gray-600 leading-6">
                                <span className="text-center mx-auto text-red-500">Network Error</span>
                            </p>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                        <li className="group">
                            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            alt="category"
                                            loading="lazy"
                                            width="35"
                                            height="35"
                                            decoding="async"
                                            data-nimg="1"
                                            srcset="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1655097002%2Fplaceholder_kvepfp.png&amp;w=48&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1655097002%2Fplaceholder_kvepfp.png&amp;w=96&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1655097002%2Fplaceholder_kvepfp.png&amp;w=96&amp;q=75"
                                            style={{ color: "transparent;" }}
                                        />
                                    </div>
                                    <div className="pl-4">
                                        <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1  group-hover">
                                            rose
                                        </h3>
                                        <ul className="pt-1 mt-1"></ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
