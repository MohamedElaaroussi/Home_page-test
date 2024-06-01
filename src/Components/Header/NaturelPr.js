import React from 'react';

const NaturelPr = () => {
    return (
        <div>
            <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6">
                <div className="flex justify-between items-center">
                    <div><h1 className="font-serif text-xl">
                        <span className="text-emerald-600 font-bold">
                            100% Natural Quality Organic Product</span>
                    </h1><p className="text-gray-500">
                            See Our latest discounted products from here and get a special discount product</p>
                    </div>
                    <a className="text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full 
                    text-white hover:bg-emerald-700" href="/search?category=breakfast">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NaturelPr;
