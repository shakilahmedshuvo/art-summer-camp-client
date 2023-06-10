// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { motion } from "framer-motion";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Reviews = () => {
    // load the data for reviews
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto my-20">
            <h2 className="text-4xl text-center font-bold py-4">
                WHAT PEOPLE SAY About Us
            </h2>
            <p className="text-center font-bold p-4">
                Customer Review Section
            </p>
            <div
                className="mx-auto bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% rounded-3xl">
                <Swiper
                    navigation={true}
                    modules={
                        [Navigation]
                    }
                    className="mySwiper">
                    {/* map for the slider */}
                    {
                        reviews.map(review => <SwiperSlide
                            key={review.id}
                        >
                            <div
                                className="my-16 mx-24 grid md:grid-cols-12 font-bold">
                                <div className="col-span-3">
                                    <img
                                        className="rounded-2xl mx-auto"
                                        src={review.img}
                                        alt="" />
                                </div>
                                <div className="p-5 col-span-9">
                                    <h2
                                        className="text-4xl pt-2 border-t-8 border-indigo-400 w-[50%]">
                                        {review.name}
                                    </h2>
                                    <div
                                        className="grid md:grid-cols-12 mt-6">
                                        <div
                                            className="col-span-1">
                                            <FaQuoteLeft
                                                className="text-5xl text-slate-500" />
                                        </div>
                                        <div
                                            className="col-span-10 font-bold p-5 text-slate-800 text-center">
                                            <h2>
                                                {review.review}
                                            </h2>
                                        </div>
                                        <div
                                            className="col-span-1 flex justify-end place-items-end mt-24">
                                            <FaQuoteRight
                                                className="text-5xl text-slate-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </motion.div>
    );
};

export default Reviews;