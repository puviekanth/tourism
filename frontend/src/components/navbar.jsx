import React from "react";
import navimg from '../assets/navbar-img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlane, faCalendarAlt, faUserFriends, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <section className="w-full min-h-[40vh] bg-gradient-to-b from-[#f4f4f4] to-[#e9e9e9] flex flex-col justify-center items-center py-8">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        <div className="flex-shrink-0">
          <img src={navimg} alt="Logo" className="h-12 w-12 md:h-16 md:w-16 cursor-pointer transition-transform hover:scale-105" />
        </div>
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <li className="text-[#51C4BC] underline decoration-[#51C4BC] underline-offset-8 decoration-2 cursor-pointer hover:text-[#3a9c95] transition-colors">Home</li>
          <li className="cursor-pointer hover:text-[#51C4BC] transition-colors">About Us</li>
          <li className="cursor-pointer hover:text-[#51C4BC] transition-colors">Explore</li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <button className="bg-[#51C4BC] text-white px-5 py-2.5 rounded-full border border-white shadow-md hover:bg-[#3a9c95] hover:shadow-lg transition-all duration-300">
              Login
            </button>
            <button className="bg-white text-[#51C4BC] px-5 py-2.5 rounded-full border border-[#51C4BC] shadow-md hover:bg-[#51C4BC] hover:text-white hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </div>
          <div className="md:hidden bg-[#51C4BC] p-3 rounded-full text-white cursor-pointer hover:bg-[#3a9c95] transition-colors">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>
      </nav>
      <div className="w-full max-w-4xl mx-auto mt-12 px-6 lg:px-8">
        <div className="bg-white rounded-full shadow-xl overflow-hidden flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="flex-1 flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Where</h4>
              <span className="text-sm text-gray-500">Search destinations</span>
            </div>
            <FontAwesomeIcon icon={faPlane} size="lg" className="text-gray-600 ml-4" />
          </div>
          <div className="flex-1 flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">When</h4>
              <span className="text-sm text-gray-500">Add dates</span>
            </div>
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" className="text-gray-600 ml-4" />
          </div>
          <div className="flex-1 flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Who</h4>
              <span className="text-sm text-gray-500">Add guests</span>
            </div>
            <FontAwesomeIcon icon={faUserFriends} size="lg" className="text-gray-600 ml-4" />
          </div>
          <div className="flex items-center justify-center px-6 py-4 bg-[#51C4BC] cursor-pointer hover:bg-[#3a9c95] transition-colors">
            <FontAwesomeIcon icon={faSearch} size="lg" className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;