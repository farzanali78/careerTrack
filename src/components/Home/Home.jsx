import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown } from "lucide-react";

function Home() {
  const [isAdmin, setisAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [showform, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDateApplied] = useState("");
  const [application, setApplication] = useState([]);
  const allUsers = JSON.parse(localStorage.getItem("User")) || [];
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
    localStorage.setItem(storageKey, JSON.stringify(application));
  }, [application, user.userName]);

  const handleClick = () => {
    if (isAdmin) {
      navigate("/showUsers");
    } else {
      setShowForm(true);
    }
  };

  const navigate = useNavigate();

  const handleApplication = (Usercompany, Userrole, Jobstatus, applyDate) => {
    const newApp = {
      id: Date.now(),
      company: Usercompany,
      role: Userrole,
      status: Jobstatus,
      Date: applyDate,
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
    setDateApplied("");
    setStatus("Select a status");
    toast.success("Job added!");
    setApplication((prev) => [...prev, newApp]);
  };

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
                      "Review registered users and keep the platform running smoothly.",
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

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
              className="flex gap-2"
            >
              <button
                onClick={handleClick}
                className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
              >
                {isAdmin ? "View All Users" : "+ Add Job"}
              </button>

              {isAdmin ? (
                ""
              ) : (
                <button
                  onClick={() => navigate("/application")}
                  className="bg-[#F5A623] text-[#1B3A6B] font-semibold px-8 py-3 rounded-full hover:bg-[#e09615] transition cursor-pointer"
                >
                  My Jobs
                </button>
              )}
            </motion.div>
          </AnimatePresence>
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
 
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                      <label className="text-sm md:hidden font-medium text-gray-500 whitespace-nowrap">Date Applied</label>
                      <input
                      type="date"
                      placeholder="Date"
                      value={date}
                      onChange={(e) => setDateApplied(e.target.value)}
                      className="flex-1 outline-none text-sm"
                    />
                    </div>

                    <div className="relative w-full">
                      <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full border rounded-lg px-3 py-2 appearance-none bg-white pr-10"
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
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                    </div>

                    <div className="flex justify-center items-center flex-row gap-2 mt-4">
                      <button
                        onClick={() =>
                          handleApplication(company, role, status, date)
                        }
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
