//#51C4BC

import React from "react";
import navimg from '../assets/navbar-img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faSearch , faPlane , faCalendar , faUserPlus} from "@fortawesome/free-solid-svg-icons";


const Navbar = () =>{
    return(
        <>
            <section className="w-[100vw] h-[40vh] bg-[#f4f4f4]">
                <navbar className="flex items-center justify-between">
                    <div>
                        <img src={navimg} alt="navbar img" className=" ml-8 h-28 w-28 cursor-pointer"/>
                    </div>
                    <div>
                        <ul className="flex justify-center gap-10 ml-10">
                            <li className="text-[#51C4BC] underline decoraation-[#51C4BC] underline-offset-8 decoration-2">Home</li>
                            <li>About Us</li>
                            <li>Explore</li>
                        </ul>
                    </div>
                    <div className="flex gap-11 mr-4 items-center">
                        <div className="flex gap-4">
                            <div className="bg-[#51C4BC] p-2 rounded-3xl w-[78px] text-center border border-solid border-[#ffffff] cursor-pointer">
                                <button className="text-white cursor-pointer">Login</button>
                            </div>
                            <div className="border border-solid border-[#51C4BC] rounded-3xl w-[88px] text-center p-2 bg-[#ffffff] text-[#51C4BC] cursor-pointer">
                                <button className="cursor-pointer">Sign Up</button>
                            </div>
                        </div>

                        <div className="bg-[#51C4BC] w-10 rounded-full">
                            <FontAwesomeIcon icon={faBars} size="lg" className="mr-20 cursor-pointer p-2 text-white"/>
                        </div>
                    </div>
                </navbar>
                <section className="mt-10">
                    <div className="flex justify-center gap-16">
                        <div className="w-64 h-auto border-2 border-solid border-[#f4f4f4] p-4 bg-white rounded-xl flex justify-between items-center">
                            <div>
                                <h4>Where</h4>
                                <span className="text-sm text-[#adb5bd]">Destination</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPlane} size="lg" />
                            </div>
                        </div>
                            <div className="h-20 border-r-2 border-[#51C4BC]"></div>
                        <div className="w-64 h-auto border-2 border-solid border-[#f4f4f4] p-4 bg-white rounded-xl flex justify-between items-center">
                            <div>
                                <h4>When</h4>
                                <span className="text-sm text-[#adb5bd]">Date and time</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendar} size="lg" />
                            </div>
                            
                        </div>
                        <div className="h-20 border-r-2 border-[#51C4BC]"></div>

                        <div className="w-64 h-auto border-2 border-solid border-[#f4f4f4] p-4 bg-white rounded-xl flex justify-between items-center">
                            <div>
                                <h4>Who</h4>
                                <span className="text-sm text-[#adb5bd]">How many people</span>
                            </div>
                            <div>
                                 <FontAwesomeIcon icon={faUserPlus} size="lg" />
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </>
    );
}

export default Navbar;