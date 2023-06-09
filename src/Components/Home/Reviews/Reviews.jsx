// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
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
        <div
            className="max-w-7xl mx-auto my-20">
            <h2>
                WHAT PEOPLE SAY
            </h2>
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
                                        className="rounded-2xl"
                                        src={review.img}
                                        alt="" />
                                </div>
                                <div className="p-5 col-span-9">
                                    <h2 className="text-4xl pt-2 border-t-8 border-gray-500 w-[50%]">
                                        {review.name}
                                    </h2>
                                    <div className="grid md:grid-cols-12">
                                        <div
                                            className="col-span-2">

                                        </div>
                                        <div
                                            className="col-span-8">

                                        </div>
                                        <div
                                            className="col-span-2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;