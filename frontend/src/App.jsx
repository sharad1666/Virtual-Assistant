import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Customize from './pages/Customize.jsx'
import UserContext, { userDataContext } from './context/UserContext.jsx'
import Home from './pages/Home'
import { useContext } from 'react'
import Customize2 from './pages/Customize2.jsx'

function App() {
  const {userData,setUserData} = useContext(userDataContext)
  return (
    <Routes>
      <Route path='/' element={(userData?.assistantImage && 
      userData?.assistantName)?<Home/>: <Navigate to={"/customize"}/>}/>
      <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
      <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
      <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signin"}/>}/>
      <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signup"}/>}/>
    </Routes>
  )
}

export default App
