import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { User } from "lucide-react";
import { Navigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { div, nav } from "motion/react-client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isAdmin,setisAdmin] = useState(false)
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminCred")) || [];
    setAdmin(adminData);
  }, []);

  return (
    <>
    
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#1B3A6B]  md:flex p-2 w-full"
      >
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
                  to={admin[0]?.isAdmin ? "/showUsers" : "/application"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-white" : "text-black"}`
                  }
                >
                  {admin[0]?.isAdmin ? "Manage Users" : "My Jobs"}
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <button
              onClick={() => navigate("/account")}
              className="p-2 cursor-pointer rounded-full bg-[#F7F7F5]/20 hover:bg-[#F5A623]/30 transition-colors"
            >
              <User size={20} className="text-[#F7F7F5]" />
            </button>
          </div>
        </div>
          <div className="md:hidden w-full bg-[#1B3A6B] ">
        <div className="flex justify-between">
          <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
            <button
              onClick={() => navigate("/account")}
              className="p-2 cursor-pointer rounded-full bg-[#F7F7F5]/20 hover:bg-[#F5A623]/30 transition-colors"
            >
              <User size={20} className="text-[#F7F7F5]" />
            </button>
          </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} 
            className="bg-[#1B3A6B] py-1">
              <div>
                <h1 className="font-bold text-xl ml-2 text-[#F7F7F5]">
                  careerTrack.
                </h1>
              </div>
              <ul className="flex flex-col justify-center items-center gap-1 mb-2">
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
                    to={admin[0]?.isAdmin ? "/showUsers" : "/application"}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl font-semibold ${isActive ? "bg-[#1B3A6B] text-[#F5A623]" : "text-white"}`
                    }
                  >
                    {admin[0]?.isAdmin ? "Manage Users" : "My Jobs"}
                  </NavLink>
                </li>
              </ul>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      </motion.div>
    </>
  );
}

export default Header;
