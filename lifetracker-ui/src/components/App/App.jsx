import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../LoginPage/LoginPage"
import LandingPage from "../LandingPage/LandingPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"

import "./App.css"

export default function App() {
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={
            <LandingPage/>
          }/>
          <Route path='/login' element={
            <LoginPage/>
          }/>
          <Route path='/register' element={
            <RegistrationPage />
          }/>
          <Route path='/activity' element={
            <ActivityPage />
          }/>
          <Route path='*' element={
            <NotFound />
          }/>

        </Routes>
        </BrowserRouter>
        </React.Fragment>
    </div>
  )
}
