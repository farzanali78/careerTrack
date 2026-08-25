import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-[#1B3A6B] flex justify-between items-center gap-2 px-20 py-4 w-full">
      <div>
        <h1 className="font-bold text-2xl text-[#F7F7F5]">careerTrack.</h1>
      </div>

      <div>
        <p className="text-white">© 2026 CareerTrack. All rights reserved.</p>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              to={"home"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Application"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
              }
            >
              My Applications
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/account"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
              }
            >
              My account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
