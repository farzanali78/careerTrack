import React from 'react' 
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import L_R_Header from './components/Login_Register_Header/L_R_Header';

function Layout() {
  const location = useLocation()
  const authroutes = ['/','/register']
  return (
    <>
    {authroutes.includes(location.pathname) ? <L_R_Header/> : <Header/>}
    <Outlet/>
     {!authroutes.includes(location.pathname) && <Footer/>}
    </>
  )
}

export default Layout