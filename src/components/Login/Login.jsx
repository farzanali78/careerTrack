import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginImg.jpeg";
import { Mail01Icon, LockPasswordIcon } from "@hugeicons/core-free-icons";
import { useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);
  const [user, setUser] = useState([]);

  const getAdminData = () => {
    setAdmin(JSON.parse(localStorage.getItem("adminCred")) || []);
  };

  const setAdminData = (isAdmin = false) => {
    const admin = [
      {
        adminEmail: "admin",
        adminPassword: "admin1234",
        isAdmin: isAdmin,
      },
    ];
    localStorage.setItem("adminCred", JSON.stringify(admin));
  };

  const getUserData = () => {
  setUser(JSON.parse(localStorage.getItem("User")) || []);
};


  useEffect(() => {
    setAdminData();
    getUserData();
    getAdminData();
  }, []);

  const handleUserData = (email, pass) => {
    let found = false;
    admin.map((a) => {
      if (a.adminEmail == email && a.adminPassword == pass) {
        found = true;
        setAdminData(true);
        setEmail("");
        setPassword("");
          toast.success("Welcome Admin", {
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
        navigate('home')
      }
    });

    

    if (user.length === 0) {
      toast.error("User not found! create account first", {
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
      setEmail("");
      setPassword("");
      return;
    }
    user.map((u) => {
      if (u.Email == email && u.pass == pass) {
        found = true;
        setEmail("");
        setPassword("");
        localStorage.setItem('loggedIn_User',JSON.stringify(u))
         toast.success(`Welcome Back ${u.userName}`, {
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
        navigate('home')
      }
    });
    if (!found) {
      toast.error("Enter correct details!", {
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
//  if (found) {
//       return;
//     }
    
  };
  return (
    <>
    
      <div className="flex justify-center items-center w-full min-h-screen bg-[#F7F7F5] px-8">
        <div className="flex items-center justify-center gap-8 max-w-6xl">
          <div className="hidden md:block w-[55%]">
            <img
              src={loginImg}
              alt="loginImg"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#1B3A6B] md:w-[45%] flex flex-col gap-2 w-full max-w-sm rounded-xl p-6 sm:p-10">
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
              </div>
              <div className="flex mt-2 justify-end items-end">
                <button
                  onClick={() => setshowPassword(!showPassword)}
                  className="underline border-none text-white cursor-pointer text-sm"
                >
                  Show Password
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button
                  className="text-white border-2 cursor-pointer px-3 py-2 hover:bg-white hover:text-cyan-500 duration-75 ease-out border-cyan-500 rounded-xl font-semibold"
                  onClick={() => handleUserData(email, password)}
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <p className="font-semibold text-sm text-white">
                  Dont't have an account?{" "}
                  <Link to="/register" className="hover:text-cyan-500">
                    Register here
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

export default Login;
