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
  const [appState, setAppState] = React.useState({})
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar user = {appState.user}/>
        <Routes>
          <Route path='/' element={
            <LandingPage/>
          }/>
          <Route path='/login' element={
            <LoginPage setAppState = {setAppState}/>
          }/>
          <Route path='/register' element={
            <RegistrationPage setAppState = {setAppState}/>
          }/>
          <Route path='/activity' element={
            <ActivityPage user = {appState?.user} appState = {appState} setAppState = {setAppState}/>
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
