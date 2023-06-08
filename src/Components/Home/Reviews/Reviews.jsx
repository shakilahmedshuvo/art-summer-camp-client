// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

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
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div
                                className="my-16 mx-24 flex flex-col items-center font-bold">
                                {/* rating start */}
                                {/* <Rating
                                    style=
                                    {
                                        { maxWidth: 180 }
                                    }
                                    value={review.rating}
                                    readOnly
                                /> */}
                                <div
                                    className="m-6">
                                    {/* <FaQuoteLeft className="text-9xl"></FaQuoteLeft> */}
                                </div>
                                {/* rating end */}
                                <p
                                    className="py-8 text-center">
                                    {review.review}
                                </p>
                                <h3
                                    className="text-2xl text-orange-400 uppercase">
                                    {review.name}
                                </h3>
                                <img
                                    src={review.img}
                                    alt="" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;