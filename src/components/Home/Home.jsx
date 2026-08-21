import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

function Home() {
  const [isAdmin, setisAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [showform, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [application, setApplication] = useState([]);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("adminCred"));
    setisAdmin(admin[0].isAdmin);
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedIn_User")) || {};
    setUser(savedUser);
  }, []);

  useEffect(() => {
    if (!user.userName) return;
    const storageKey = `applications_${user.userName}`;
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setApplication(data);
  }, [user.userName]);

  useEffect(() => {
    if (!user.userName) return;
    const storageKey = `applications_${user.userName}`;
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
  }, [application, user.userName]);

  const handleClick = () => {
    if (isAdmin) {
      setShowUser(true);
    } else {
      setShowForm(true);
    }
  };

  const navigate = useNavigate();

  const handleApplication = (Usercompany, Userrole, Jobstatus) => {
    const newApp = {
      id: Date.now(),
      company: Usercompany,
      role: Userrole,
      status: Jobstatus,
    };

    if (!Usercompany || !Userrole || !Jobstatus) {
      toast.error("Fill all fields!", {
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
      return;
    }

    setCompany("");
    setRole("");
    setStatus("pending");
    toast.success("Job added!");
    setApplication((prev) => [...prev, newApp]);
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(application));
  }, [application, storageKey]);

  return (
    <>
      <section className="w-full min-h-screen overflow-x-hidden bg-[#F7F7F5] flex items-center justify-center px-6">
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
              onClick={handleClick}
              className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
            >
              {isAdmin ? "View All Users" : "+ Add Job"}
            </button>

            <button
              onClick={() => navigate("/application")}
              className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
            >
              {isAdmin ? "Manage Users" : "View My Jobs"}
            </button>
          </div>
          <AnimatePresence>
            {showform && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex justify-center items-center  p-3 rounded-xl"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div>
                    <div className="flex justify-end items-end">
                      <button
                        onClick={() => setShowForm(false)}
                        className="p-1 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <X size={20} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="flex max-w-md flex-col gap-3 p-2">
                    <input
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2"
                    />

                    <input
                      type="text"
                      placeholder="Role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2"
                    />

                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Select status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="applied">Applied</option>
                      <option value="interview">Interview</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>

                    <div className="flex justify-center items-center flex-row gap-2 mt-4">
                      <button
                        onClick={() => handleApplication(company, role, status)}
                        className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
                      >
                        save
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default Home;
