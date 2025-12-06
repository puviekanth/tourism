import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faSearch,
  faCalendarAlt,
  faUserFriends,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import pkgIcon from '../assets/pkgIcon.png';
import reviewIcon from '../assets/field-trip.png';
import aboutIcon from '../assets/information.png';
import { useRef } from "react";




const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isMenuOpen,setMenuOpen] = useState(false);
  const [isProfileMenuOpen , setProfileMenuOpen] = useState(false);
  const [isLoggedIn , setLoggedIn] = useState(true);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      profileRef.current &&
      !profileRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
      setProfileMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  const menuOpen = () =>{
    setMenuOpen(!isMenuOpen);
    setProfileMenuOpen(false);
  }

  const profileMenuOpen = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
    setMenuOpen(false);
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes searchPulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
          }
        }

        .nav-logo {
          animation: ${isLoaded ? 'slideInLeft 0.6s ease-out' : 'none'};
        }

        .nav-menu {
          animation: ${isLoaded ? 'fadeInUp 0.6s ease-out 0.2s backwards' : 'none'};
        }

        .nav-profile {
          animation: ${isLoaded ? 'slideInRight 0.6s ease-out 0.3s backwards' : 'none'};
        }

        .search-container {
          animation: ${isLoaded ? 'fadeInUp 0.8s ease-out 0.4s backwards' : 'none'};
        }

        .menu-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 3px;
          background: #51C4BC;
          border-radius: 2px;
          transition: transform 0.3s ease;
        }

        .menu-item:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .menu-item:hover {
          transform: translateY(-2px);
        }

        .search-section {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-section:hover {
          transform: translateY(-2px);
          background-color: #f9fafb;
        }

        .search-icon-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-icon-wrapper:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 12px rgba(81, 196, 188, 0.4);
        }

        .search-icon {
          transition: all 0.3s ease;
        }

        .search-icon-wrapper:hover .search-icon {
          animation: searchPulse 0.6s ease-in-out;
        }

        .profile-menu {
          transition: all 0.3s ease;
        }

        .profile-menu:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .logo-img {
          transition: all 0.3s ease;
        }

        .logo-img:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .divider {
          transition: opacity 0.3s ease;
        }

        .search-section:hover .divider {
          opacity: 0;
        }
        @keyframes dropdownSlide {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .dropdown-anim {
            animation: dropdownSlide 0.25s ease-out;
          }

        }

      `}</style>
      
      <header className="w-full h-[35vh] bg-gradient-to-b from-[#f4f4f4] to-[#e9e9e9] border-b border-gray-100 pt-7">
        <nav className="max-w-auto ml-5 mr-15 px-6 lg:px-10 py-4 flex items-center justify-between relative">
        
          <div className="flex items-center nav-logo">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%2351C4BC'/%3E%3Cpath d='M20 10 L28 25 L12 25 Z' fill='white'/%3E%3C/svg%3E"
              alt="logo"
              className="h-10 w-10 cursor-pointer logo-img"
            />
          </div>

          
          <ul className="hidden md:flex items-center space-x-10 font-medium text-gray-700 nav-menu">
            <li className="flex flex-col items-center cursor-pointer">
              <div className="flex items-center justify-center">
                  <img src={pkgIcon} className="w-8 h-8" alt="package-icon" />
                  <div className="ml-1">
                    <span className="text-[#51C4BC] font-semibold text-sm">Packages</span>
                  </div>
              </div>
              <span className="w-full h-[3px] mt-1 rounded-full bg-[#51C4BC]"></span>
            </li>
            <li className="cursor-pointer menu-item py-2">
              <div className="flex items-center justify-center">
                <img src={reviewIcon} alt="experience-icon" className="w-8 h-8" />
                <span className="font-semibold ml-1 text-sm">Experiences</span>
              </div>
            </li>
            <li className="cursor-pointer menu-item py-2">
              <div className="flex items-center justify-center">
                <img src={aboutIcon} alt="experience-icon" className="w-8 h-8" />
                <span className="font-semibold ml-1 text-sm">About Us</span>
              </div>
            </li>
          </ul>

          
          <div className="flex items-center gap-8 nav-profile bg-transparent">
          <div
            ref={menuRef}
            className="p-2 rounded-full bg-[#e3e3e3] cursor-pointer hover:bg-gray-100 transition"
            onClick={menuOpen}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-700 text-lg" />
          </div>

          {isMenuOpen && (
            <div
              className="absolute top-17 right-21 bg-white shadow-lg rounded-sm w-38 py-4 z-50 "
            >
              <ul className="flex flex-col space-y-3 px-4 text-gray-700 font-medium">
                <li className="cursor-pointer hover:text-[#51C4BC] transition pb-3 border-b border-gray-300 text-sm">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-[#51C4BC] transition text-sm">
                  Refer Hotels
                </li>
              </ul>
            </div>
          )}

          <div
            ref={profileRef}
            className="p-2 rounded-full bg-[#e3e3e3] cursor-pointer hover:bg-gray-100 transition"
            onClick={profileMenuOpen}
          >
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-700 text-xl" />
          </div>

          {isProfileMenuOpen && (
            <div
              className="absolute top-17 bg-white shadow-lg rounded-sm w-38 py-4 z-50 ml-8"
            >
              <ul className="flex flex-col space-y-3 px-4 text-gray-700 font-medium text-left">
                {isLoggedIn ? (
                  <>
                    <li className="cursor-pointer hover:text-[#51C4BC] transition pb-3 border-b border-gray-300 text-sm ">
                      Profile
                    </li>
                    <li className="cursor-pointer hover:text-[#51C4BC] transition text-sm">
                      Sign Out
                    </li>
                  </>
                ) : (
                  <>
                    <li className="cursor-pointer hover:text-[#51C4BC] transition pb-3 border-b border-gray-300 text-sm">
                      Login
                    </li>
                    <li className="cursor-pointer hover:text-[#51C4BC] transition text-sm">
                      Sign Up
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}


        </div>

        </nav>
        

          



        
        <div className="w-full flex justify-center mt-15 mb-4 search-container">
          <div className="max-w-3xl w-full bg-white flex items-center rounded-full shadow-md border border-gray-300 hover:shadow-lg transition overflow-hidden">
            <div className="flex-1 group flex items-center">
              <div className="flex items-center w-full gap-3 px-6 py-3 cursor-pointer rounded-full search-section">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">Where</h4>
                  <p className="text-xs text-gray-500">Search destinations</p>
                </div>
                <FontAwesomeIcon icon={faPlane} className="text-gray-600" />
              </div>
              <div className="border-r border-gray-300 h-8 mx-2 divider"></div>
            </div>
            <div className="flex-1 group flex items-center">
                <div className="flex items-center w-full gap-3 px-6 py-3 cursor-pointer rounded-full search-section">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">When</h4>
                    <p className="text-xs text-gray-500">Add Date</p>
                  </div>
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600" />
                </div>
                <div className="border-r border-gray-300 h-8 mx-2 divider"></div>
            </div>
            <div className="flex-1 group flex items-center">
              <div className="flex items-center w-full gap-3 px-6 py-3 cursor-pointer rounded-full search-section">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm">Who</h4>
                  <p className="text-xs text-gray-500">Add People</p>
                </div>
                <FontAwesomeIcon icon={faUserFriends} className="text-gray-600" />
              </div>
            </div>

            <div 
              className="px-6 py-3 bg-[#51C4BC] flex items-center justify-center cursor-pointer h-12 w-12 mr-2 rounded-full hover:bg-[#3a9c95] search-icon-wrapper"
              onMouseEnter={() => setIsSearchHovered(true)}
              onMouseLeave={() => setIsSearchHovered(false)}
            >
              <FontAwesomeIcon icon={faSearch} className="text-white text-md search-icon" />
            </div>

          </div>

        </div>
      </header>
    </>
  );
};

export default Navbar;