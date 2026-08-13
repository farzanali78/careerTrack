import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Application from './components/Application/Applications'
import Account from "./components/Account/Account"
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="application" element={<Application/>}/>
      <Route path="account" element={<Account/>}/>
      </Route>
     
     </Routes>
    </>
  )
}

export default App
