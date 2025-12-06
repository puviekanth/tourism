import React from "react";
import footerimg from '../assets/navbar-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faCcVisa, faCcMastercard, faCcPaypal, faCcAmex } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-gray-50 to-white py-16 shadow-inner">
            <div className="px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">

                    {/* Column 1: Logo + Description + Contact + Social Icons */}
                    <div className="space-y-6 pr-8">
                        <img
                            src={footerimg}
                            alt="TravelCo Logo"
                            className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                        />

                        <p className="text-gray-500 text-xs leading-loose tracking-wide">
                            Discover unforgettable travel experiences with TravelCo. We offer curated packages, premium services, and expert recommendations to make your journeys extraordinary.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-gray-500 text-xs">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Travel Lane, Adventure City, 12345</p>
                            <p><FontAwesomeIcon icon={faPhone} className="mr-2" /> +1 (555) 123-4567</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@travelco.com</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-5 mt-4">
                            <a href="#" className="text-gray-500 hover:text-[#51C4BC] transition-all duration-300 hover:scale-125">
                                <FontAwesomeIcon icon={faFacebookF} size="xl" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#51C4BC] transition-all duration-300 hover:scale-125">
                                <FontAwesomeIcon icon={faTwitter} size="xl" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#51C4BC] transition-all duration-300 hover:scale-125">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-[#51C4BC] transition-all duration-300 hover:scale-125">
                                <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 className="text-[#51C4BC] font-bold mb-5 text-xl tracking-tight">Company</h3>
                        <ul className="space-y-4 text-gray-600 font-medium text-sm">
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Packages</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Services</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-[#51C4BC] font-bold mb-5 text-xl tracking-tight">Support</h3>
                        <ul className="space-y-4 text-gray-600 font-medium text-sm">
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Best Deals</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Recommendations</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Refer Hotels</a></li>
                            <li><a href="#" className="hover:text-[#51C4BC] transition-colors duration-300 hover:underline">Customer Service</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-[#51C4BC] font-bold mb-3 text-xl tracking-tight">Newsletter</h3>

                        <p className="text-gray-500 text-xs mb-5 leading-loose">
                            Stay updated with the latest deals, travel tips, and get 10% off your first booking.
                        </p>

                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-5 py-3 pr-12 w-full focus:outline-none bg-transparent rounded-full placeholder:text-gray-400 text-sm border border-gray-200 shadow-lg focus:ring-2 focus:ring-[#51C4BC] focus:shadow-xl transition-all duration-300"
                            />

                            <button
                                type="submit"
                                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#51C4BC] text-white p-2.5 hover:bg-[#3EA89F] transition-colors duration-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} size="sm" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-100 pt-6 text-center text-gray-400 text-xs">
                    <div className="flex justify-center space-x-4 mb-2">
                        <FontAwesomeIcon icon={faCcVisa} size="lg" className="text-gray-500" />
                        <FontAwesomeIcon icon={faCcMastercard} size="lg" className="text-gray-500" />
                        <FontAwesomeIcon icon={faCcPaypal} size="lg" className="text-gray-500" />
                        <FontAwesomeIcon icon={faCcAmex} size="lg" className="text-gray-500" />
                    </div>
                    &copy; {new Date().getFullYear()} TravelCo. All rights reserved. | <a href="#" className="hover:text-[#51C4BC] transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-[#51C4BC] transition-colors">Terms of Service</a> | <a href="#" className="hover:text-[#51C4BC] transition-colors">Accessibility</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;