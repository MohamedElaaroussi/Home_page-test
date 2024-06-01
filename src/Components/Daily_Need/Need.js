import React from 'react';

const Need = () => {
    return (
        <div>
            {
                <div id="downloadApp" className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
                            <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
                                <img
                                    alt="app download"
                                    width="500"
                                    height="394"
                                    decoding="async"
                                    data-nimg="1"
                                    className="block w-auto"
                                    src="/_next/image?url=https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img-left_s5n2zf.webp&w=1080&q=75"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">
                                    Get Your Daily Needs From Our KachaBazar Store
                                </h3>
                                <p className="text-base opacity-90 leading-7">
                                    There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers.
                                </p>
                                <div className="mt-8 flex">
                                    <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.apple.com/app-store/">
                                        <img
                                            alt="app store"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-full h-auto"
                                            src="https://res.cloudinary.com/ahossain/image/upload/v1697688165/settings/app-store_cyyc0f.svg"
                                        />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Jun0122&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-lk-1003227-med-hasem-py-Evergreen-Jun0122-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700071429441653_creativeid_600975795576_device_c&gclid=CjwKCAjwwo-WBhAMEiwAV4dybdy60tnQqCSnQ-cXShNnEcxmaBx2I6iwwc_WEqoA5sN9YSLJEXh9fBoC3u4QAvD_BwE&gclsrc=aw.ds">
                                        <img
                                            alt="play store"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="1"
                                            className="w-full h-auto"
                                            src="https://res.cloudinary.com/ahossain/image/upload/v1697688167/settings/play-store_cavwua.svg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="md:hidden lg:block">
                                <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
                                    <img
                                        alt="app download"
                                        width="500"
                                        height="394"
                                        decoding="async"
                                        data-nimg="1"
                                        className="block w-auto"
                                        src="/_next/image?url=https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img_c7xqg4.webp&w=1080&q=75"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
}

export default Need;