import { FaFacebookF, FaTwitter, FaInstagram, FaSnapchatSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <footer
                className="footer max-w-7xl text-white font-bold mx-auto pt-16">
                <div>
                    <div className="flex">
                        <img
                            width="50"
                            height="50"
                            className="rounded-full mr-3"
                            src="https://img.freepik.com/premium-vector/emblem-art-gallery_658131-1.jpg?w=740"
                            alt="" />
                        <p className="text-xl">
                            ART SUMMER CAMP
                            <br />
                            <small className="text-xs">
                                Providing Reliable Services Since 1992
                            </small>
                        </p>
                    </div>
                    <button
                        className="btn glass font-bold text-white hover:text-black btn-wide my-7">
                        Appointment
                    </button>
                </div>
                <div>
                    <span
                        className="footer-title">
                        Quick Links
                    </span>
                    <a
                        className="link link-hover">
                        My Account
                    </a>
                    <a
                        className="link link-hover">
                        Our Blogs
                    </a>
                    <a
                        className="link link-hover">
                        Our Gallery
                    </a>
                    <a
                        className="link link-hover">
                        About us
                    </a>
                    <a
                        className="link link-hover">
                        Contact Us
                    </a>
                </div>
                <div>
                    <span
                        className="footer-title">
                        Company
                    </span>
                    <a
                        className="link link-hover">
                        About us
                    </a>
                    <a
                        className="link link-hover">
                        Our Instructors
                    </a>
                    <a
                        className="link link-hover">
                        Our Classes
                    </a>
                    <a
                        className="link link-hover">
                        Our Departments
                    </a>
                    <a
                        className="link link-hover">
                        Online Payment
                    </a>
                </div>
                <div>
                    <span
                        className="footer-title">
                        Our Address
                    </span>
                    <a
                        className="link link-hover">
                        49 GULSHAN Street
                    </a>
                    <a
                        className="link link-hover">
                        Dhaka-1213
                    </a>
                    <a
                        className="link link-hover">
                        Bangladesh
                    </a>
                </div>
                <div>
                    <span
                        className="footer-title">
                        Legal
                    </span>
                    <a
                        className="link link-hover">
                        Terms of use
                    </a>
                    <a
                        className="link link-hover">
                        Privacy policy
                    </a>
                    <a
                        className="link link-hover">
                        Cookie policy
                    </a>
                </div>
            </footer>
            {/* divider */}
            <div className="max-w-7xl mx-auto">
                <div
                    className="divider">
                </div>
                {/* social media links */}
                <h2 className="text-center p-3 text-white font-bold text-2xl">
                    Our Social Media Links
                    <br />
                    <small className="text-xs">
                        Connect Us With Our  Social Media
                    </small>
                </h2>
                <div
                    className="flex justify-evenly py-6 text-white">
                    <FaFacebookF className="text-3xl" />
                    <FaTwitter className="text-3xl" />
                    <FaInstagram className="text-3xl" />
                    <FaSnapchatSquare className="text-3xl" />
                </div>
                <div className="text-center text-white py-6">
                    <small className="text-xs font-semibold">
                        Copyright © 2023 - All right reserved by ART SUMMER CAMP SAS
                        <br />
                        © 2023 Trademarks and brands are the property of their respective owners.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Footer;