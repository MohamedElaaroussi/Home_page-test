import React from 'react';

const Quick = () => {
    return (
        <div>
            <div class="block mx-auto max-w-screen-2xl mt-10 mb-10">
                <div class="mx-auto max-w-screen-2xl px-4 sm:px-10">
                    <div class="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
                        <div class="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                            <div class="flex justify-between items-center">
                                <div class="lg:w-3/5">
                                    <span class="text-base lg:text-lg">
                                        Organic Products and Food
                                    </span>
                                    <h2 class="font-serif text-lg lg:text-2xl font-bold mb-1">
                                        Quick Delivery to Your Home</h2>
                                    <p class="text-sm font-sans leading-6">
                                        There are many products you will find in our shop, Choose your daily necessary product from our
                                        KachaBazar shop and get some special offers. See Our latest discounted products from here and get
                                        a special discount.
                                    </p>
                                    <a class="lg:w-1/3  text-xs font-serif font-medium inline-block mt-5 px-8 py-3 
                            bg-emerald-500 text-center text-white rounded-full hover:text-white contact-btn"
                                        target="_blank" href="/#">
                                        Download App</a>
                                </div>
                                <div class="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
                                    <img alt="Quick Delivery to Your Home" loading="lazy" width="373" height="250"
                                        decoding="async" data-nimg="1" class="block w-auto object-contain"
                                        style={{ color: "transparent;" }}
                                        srcset="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688032%2Fset
                                        tings%2Fdelivery-boy_rluuoq.webp&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.co
                                        m%2Fahossain%2Fimage%2Fupload%2Fv1697688032%2Fsettings%2Fdelivery-boy_rluuoq.webp&amp;w=750&amp;q=75 2x"
                                        src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697688032%2Fsett
                                        ings%2Fdelivery-boy_rluuoq.webp&amp;w=750&amp;q=75"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quick;
