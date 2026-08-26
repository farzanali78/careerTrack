import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { User } from "lucide-react";
import { Navigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { div } from "motion/react-client";

function Header() {
  const navigate  = useNavigate()
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>
    <div className="md:hidden w-full bg-[#1B3A6B] ">
      <button
  className="md:hidden text-white"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
 {
      menuOpen && (
        <div className="bg-[#1B3A6B] py-1">
           <div>
            <h1 className="font-bold text-xl ml-2 text-[#F7F7F5]">careerTrack.</h1>
          </div>
          <ul className="flex flex-col justify-center items-center gap-1">
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
            </ul>
        </div>
      )
    }
    </div>
   
      <div className="bg-[#1B3A6B] hidden md:flex p-2 w-full">
        <div className="w-full max-w-6xl hidden md:flex justify-between items-center mx-auto relative px-4 py-2">
          <div>
            <h1 className="font-bold text-3xl text-[#F7F7F5]">careerTrack.</h1>
          </div>

          <div className="absolute hidden md:flex left-1/2 -translate-x-1/2 bg-[#F7F7F5] py-2 px-3 rounded-3xl shadow-md">
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
              {/* <li>
                <NavLink
                  to={"/account"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-white" : "text-black"}`
                  }
                >
                  My account
                </NavLink>
              </li> */}
            </ul>
          </div>

          <div>
            <button onClick={()=>navigate("/account")} className="p-2 cursor-pointer rounded-full bg-[#F7F7F5]/20 hover:bg-[#F5A623]/30 transition-colors">
              <User size={20} className="text-[#F7F7F5]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
