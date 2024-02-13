import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:5500'

const App = () => {
  return (
    <UserContextProvider>
    <Toaster position = "top-center" />
    <Routes>
     <Route path = "/" element = {<Home/>}/>
     <Route path = "/login" element = {<Login/>}/>
     <Route path = "/signup" element = {<Signup/>}/>
    </Routes>
    </UserContextProvider>
  )
}

export default App
