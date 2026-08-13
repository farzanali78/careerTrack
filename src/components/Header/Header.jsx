import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <div className="bg-[#1B3A6B] p-2 w-full">
        <div className="w-full max-w-6xl flex items-center mx-auto relative px-4 py-2">

          <div>
           <h1 className="font-bold text-3xl text-[#F7F7F5]">careerTrack.</h1>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bg-[#F7F7F5] py-2 px-3 rounded-3xl shadow-md">
            <ul className="flex items-center gap-1">
              <li>
                <NavLink
                  to={"home"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-white" : "text-black"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Application"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-white" : "text-black"}`
                  }
                >
                  My Applications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/account"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-white" : "text-black"}`
                  }
                >
                  My account
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;