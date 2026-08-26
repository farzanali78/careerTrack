import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
 return(
   <div className="bg-[#1B3A6B] flex flex-col md:grid md:grid-cols-3 md:items-center gap-4 px-6 md:px-12 py-6 w-full">
      
      
      <div className="text-center md:text-left">
        <h1 className="font-bold text-2xl text-[#F7F7F5]">careerTrack.</h1>
      </div>

      
      <div className="flex justify-center md:order-3 md:justify-end">
        <ul className="flex flex-row gap-3">
          <li>
            <NavLink to={"home"} className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${
      isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
                  }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Application"}  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${
      isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
                  }>
              My Applications
            </NavLink>
          </li>
        </ul>
      </div>

    
      <div className="text-center md:order-2">
        <p className="text-white">© 2026 CareerTrack. All rights reserved.</p>
      </div>
    </div>
 )
}

export default Footer;
