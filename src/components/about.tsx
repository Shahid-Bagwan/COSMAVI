const about = () => {

    return (
        <>
            <section>
                <div id="about" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-left   " >
                    <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">About</p>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">Nurturing Beauty Through Innovation</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">At COSMAVI, we are driven by our unwavering commitment to nurturing beauty through innovation. With a legacy of trust and excellence, we craft professional-grade products inspired by the botanical universe. Our relentless pursuit of innovation leads us to create solutions for all hair types, free from hazardous chemicals and rigorously tested for consumer safety.</p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
                            <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
                            <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
                        </div>
                    </div>





                    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                        <div className="w-full lg:w-6/12">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Identity</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">COSMAVI Born From The Botanical Universe. Our Products Are Made For Professionals By Professionals With Proven Technologies. Also Our Legacy Has Made Us A Trusted Brand & Helped Us Develop Relationship With Our Hair Dressing Community.
                            </p>
                            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">Our appetite for being inspired by innovation is limitless in becoming better & we are obsessed with upgrading our technology, our products are solution for all hair types. Away from hazardous chemicals our products have undergone multiple product testings to ensure safety of our consumers.
                            </p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                                {/* <!-- Innovation Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                    <i className="fa-solid fa-signal text-3xl"></i>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Limitless Innovation</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">We envision a future where COSMAVI continues to be at the forefront of innovation in the hair and beauty industry</p>
                                    </div>
                                </div>

                                {/* <!-- Natural Excellence --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                    <i className="fa-solid fa-award text-3xl"></i>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Natural Excellence</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">We aspire to be leaders in harnessing the power of natural ingredients to deliver high-quality hair and beauty solutions.</p>
                                    </div>
                                </div>

                                {/* <!-- Press Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <i className="fa-solid fa-users text-3xl"></i>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Customer Empowerment</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">At COSMAVI, we believe in empowering our customers by helping them understand the uniqueness of their hair and its specific needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Team part */}
            </section>
            {/* company Introduction part */}

        </>
    )
}

export default about