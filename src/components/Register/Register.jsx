import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail01Icon,
  LockPasswordIcon,
  UserIcon,
  Contact02Icon,
} from "@hugeicons/core-free-icons";
import registerImg from "../../assets/registerImg.jpeg";

function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmShowPassword, setconfirmShowPassword] = useState(false);
  const [userCred, setUserCred] = useState(() => {
    return JSON.parse(localStorage.getItem("User")) || [];
  });
  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(userCred));
  }, [userCred]);

  const handleUserCred = (
    email,
    userName,
    userPass,
    confirmPass,
    contactNum,
  ) => {
    if (!email || !userName || !userPass || !confirmPass || !contactNum) {
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
    if (userPass != confirmPass) {
      toast.error("Password doesn't match!", {
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
      setPassword("");
      setconfirmPassword("");
      return;
    }
    if (!userName.includes("@")) {
      toast.error("Username should contain @", {
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
      setUserName("");
      return;
    }

    const newUser = {
      id: Date.now(),
      Email: email,
      userName: userName,
      pass: userPass,
      userContactNum: contactNum,
    };

    const updatedUsers = [...userCred, newUser];
    setUserCred(updatedUsers);
    setEmail("");
    setUserName("");
    setPassword("");
    setconfirmPassword("");
    setContactNum("");

    toast.success("Registered successfully!", {
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
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div className="flex justify-center items-center w-full min-h-screen bg-[#F7F7F5] px-8">
        <div className="flex items-center justify-center gap-8 max-w-6xl">
          <div className="hidden md:block w-[55%]">
            <img
              src={registerImg}
              alt="registerImg"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#1B3A6B] flex flex-col gap-2 w-full max-w-sm rounded-xl p-6 sm:p-10">
            <div>
              <h1 className="font-bold text-center sm:text-3xl text-2xl text-white">
                careerTrack.
              </h1>
            </div>
            <div className="mt-12 w-full">
              <div className="border-b-2 border-white flex items-center gap-3">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={24}
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="w-full py-2 bg-transparent text-white outline-none placeholder:text-gray-300"
                />
              </div>
              <div className="border-b-2 border-white flex items-center gap-3">
                <HugeiconsIcon
                  icon={UserIcon}
                  size={24}
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="Username"
                  className="w-full py-2 bg-transparent text-white outline-none placeholder:text-gray-300"
                />
              </div>
              <div className="border-b-2 border-white flex items-center gap-3">
                <HugeiconsIcon
                  icon={Contact02Icon}
                  size={24}
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  onChange={(e) => setContactNum(e.target.value)}
                  value={contactNum}
                  placeholder="Contact"
                  className="w-full py-2 bg-transparent text-white outline-none placeholder:text-gray-300"
                />
              </div>
              <div className="border-b-2 border-white flex items-center gap-3">
                <HugeiconsIcon
                  icon={LockPasswordIcon}
                  size={24}
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="w-full py-2 bg-transparent text-white outline-none placeholder:text-gray-300"
                />
                <button
                  className="text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show
                </button>
              </div>
              <div className="border-b-2 border-white flex items-center gap-3">
                <HugeiconsIcon
                  icon={LockPasswordIcon}
                  size={24}
                  color="#ffffff"
                  strokeWidth={1.5}
                />
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  className="w-full py-2 bg-transparent text-white outline-none placeholder:text-gray-300"
                />
                <button
                  className="text-white"
                  onClick={() => setconfirmShowPassword(!confirmShowPassword)}
                >
                  Show
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <button
                  className="text-white border-2 cursor-pointer px-3 py-2 hover:bg-white hover:text-cyan-500 duration-75 ease-out border-cyan-500 rounded-xl font-semibold"
                  onClick={() =>
                    handleUserCred(
                      email,
                      userName,
                      password,
                      confirmPassword,
                      contactNum,
                    )
                  }
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <p className="font-semibold text-sm text-white">
                  Already have an account?{" "}
                  <Link to="/" className="hover:text-cyan-500">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
