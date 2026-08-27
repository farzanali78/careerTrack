import { AnimatePresence } from 'motion/react';
import { div, tr } from 'motion/react-client';
import { useState, useEffect  } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { motion } from 'framer-motion';
import "react-toastify/dist/ReactToastify.css";
function Account() {
const [username,setUsername] = useState("")
const [userEmail,setUserEmail] = useState("")
const [isAdmin, setIsAdmin] = useState(false);
const [currentPassword,setCurrentPassword] = useState("")
const [newPassword,setNewPassword] = useState("")
const [changePasswordBtn,setChangePasswordBtn] = useState(false)
const navigate = useNavigate()

   useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("adminCred"))
      const loggedInUser = JSON.parse(localStorage.getItem("loggedIn_User")) || {};
      
      if(admin[0]?.isAdmin){
        setIsAdmin(true);
        setUsername(admin[0].adminName || "")
        setUserEmail(admin[0].adminEmail || "")
      }
      else{
        setIsAdmin(false);
        setUsername(loggedInUser.userName || "")
        setUserEmail(loggedInUser.Email || "")
      }
    }, []);

    const logOut = ()=>{
      localStorage.removeItem("loggedIn_User");
      toast.success("Logged Out Successfully!")
      navigate("/")
    } 

    const deleteUserAccount = ()=>{
        const currentUser = JSON.parse(localStorage.getItem("loggedIn_User")) || {};
        const allUsers = JSON.parse(localStorage.getItem("User")) || [];
        const updatedUsers = allUsers.filter((u)=>u.userName !== currentUser.userName)
        localStorage.setItem("User" , JSON.stringify(updatedUsers))

        const storageKey = `applications_${currentUser.userName}`
        localStorage.removeItem(storageKey)

        localStorage.removeItem("loggedIn_User")
        toast.success("Account deleted")
        navigate("/")
    }
   
    const changePassword = () =>{
      const currentUser = JSON.parse(localStorage.getItem("loggedIn_User")) || {};
      const admin = JSON.parse(localStorage.getItem("adminCred")) || [];
      if (currentPassword === currentUser.pass){
        const updateUser = {...currentUser,pass: newPassword}
        localStorage.setItem("loggedIn_User" , JSON.stringify(updateUser))

        const allUsers = JSON.parse(localStorage.getItem("User")) || [];
        const updatedUsers  = allUsers.map((u) => u.userName === currentUser.userName ? {...u, pass: newPassword}:u);
        localStorage.setItem("User", JSON.stringify(updatedUsers))
        toast.success("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        navigate("/")
      }

      
      else{
        toast.error("Incorrect current password");
      }
  
      
    }

  return (
  <>
  <AnimatePresence>
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
    className='bg-[#F7F7F5]'>
      <div className="max-w-2xl min-h-screen mx-auto p-6">
  <h1 className="text-2xl font-bold text-[#1B3A6B] mb-6">My Account</h1>

 
  <div className="bg-[#F7F7F5] rounded-xl  shadow-md p-6 mb-4">
    <h2 className="font-semibold text-lg mb-4">Profile</h2>
    <input value={username} readOnly className="w-full border rounded-lg px-3 py-2 mb-3" />
    <input value={userEmail} readOnly className="w-full border rounded-lg px-3 py-2 mb-3" />
    
     {
      isAdmin ? "" :<button onClick={()=>setChangePasswordBtn(true)} className='cursor-pointer text-gray-600 text-sm'>Change Password</button>
     }
     {
      changePasswordBtn && (
        <div>
          <input type="password" value={currentPassword} onChange={((e) => setCurrentPassword(e.target.value))} placeholder="Current password" className="w-full border rounded-lg px-3 py-2 mb-3" />
    <input type="password" value={newPassword} onChange={((e) => setNewPassword(e.target.value))} placeholder="New password" className="w-full border rounded-lg px-3 py-2 mb-3" />
    <button onClick={changePassword} className="bg-[#F5A623] cursor-pointer text-[#1B3A6B] font-semibold px-6 py-2 rounded-full">
      Update Password
    </button>
        </div>
      )
     }
  </div>

 
  <button onClick={logOut} className="w-full border cursor-pointer hover:bg-[#1B3A6B] hover:text-[#F5A623] border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-full mb-4">
    Log Out
  </button>

  
  {
    isAdmin ? "" :
    <div className="border border-red-200 bg-red-50 rounded-xl p-4">
    <p className="text-sm text-red-700 mb-2">Deleting your account removes all your tracked applications permanently.</p>
    <button onClick={deleteUserAccount} className="text-red-600 cursor-pointer font-semibold text-sm">Delete Account</button>
  </div>
   }
</div>
  </motion.div>
  </AnimatePresence>
  </>
  )
}

export default Account