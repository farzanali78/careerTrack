import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const [isAdmin, setisAdmin] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("adminCred"));
    setisAdmin(admin[0].isAdmin);
  }, []);

  const getUserData = () => {
    setUser(JSON.parse(localStorage.getItem("User")) || []);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      toast.success("Welcome Back, Admin!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.success("Welcome Back", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }, [isAdmin]);

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <section className="w-full min-h-screen bg-[#F7F7F5] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-bold text-white">
            <Typewriter
              options={{
                strings: isAdmin
                  ? ["Manage your platform", "Welcome back, Admin"]
                  : ["Track your applications.", "Know where you stand."],
                autoStart: true,
                loop: true,
                wrapperClassName: "text-5xl font-bold text-[#1B3A6B]",
                cursorClassName: "text-[#1B3A6B]",
              }}
            />
          </h1>

          <div className="text-lg text-[#1B3A6B] max-w-xl">
            <Typewriter
              options={{
                strings: isAdmin
                  ? [
                      "Monitor applicants, manage interviews and keep careerTrack running smoothly.",
                    ]
                  : [
                      "Log every application, track its status, and see your job search progress at a glance.",
                    ],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                delay: 30,
                wrapperClassName: "text-lg text-[#1B3A6B]",
                cursorClassName: "text-[#1B3A6B]",
              }}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/application")}
              className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
            >
              {isAdmin ? "View All Users" : "+ Add Application"}
            </button>

            <button
              onClick={() => navigate("/application")}
              className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
            >
              {isAdmin ? "Manage Users" : "View Application"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
