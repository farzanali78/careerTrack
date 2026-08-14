import React from 'react' 
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import L_R_Header from './components/Login_Register_Header/L_R_Header';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  const location = useLocation()
  const authroutes = ['/','/register']
  return (
    <><ToastContainer
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
      transition={Bounce} /><>
        {authroutes.includes(location.pathname) ? <L_R_Header /> : <Header />}
        <Outlet />
        {!authroutes.includes(location.pathname) && <Footer />}
      </></>
  )
}

export default Layout