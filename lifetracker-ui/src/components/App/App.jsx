import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import LoginPage from "../LoginPage/LoginPage"
import LandingPage from "../LandingPage/LandingPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import ActivityPage from "../ActivityPage/ActivityPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import NutritionPage from "../NutritionPage/NutritionPage"
import SleepPage from "../SleepPage/SleepPage"
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import apiClient from "../../services/apiClient"
import "./App.css"
import { useNutritionContext } from "../../contexts/nutrition"

export default function AppContainer(){
  return (
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext()
  const { nutrition, setNutrition} = useNutritionContext
  // const handleOnLogout = async () =>{
  //   await apiClient.logoutUser()
  //   setError(null)
  //   setUser({})
  //   setNutrition([])
  // }
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={
            <LandingPage/>
          }/>
          <Route path='/login' element={
            <LoginPage/>
          }/>
          <Route path='/register' element={
            <RegistrationPage/>
          }/>
          <Route path='/activity/*' element={
            user?.email ? <ActivityPage />: <AccessForbidden/>
          }/>
          <Route path='/exercise/*' element={
             user?.email ? <ExercisePage /> : <AccessForbidden/>
          }/>
          <Route path='/nutrition/*' element={
             user?.email ? <NutritionPage /> : <AccessForbidden/>
          }/>
          <Route path='/sleep/*' element={
             user?.email ? <SleepPage /> : <AccessForbidden/>
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
