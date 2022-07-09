import * as React from "react"
import { Link } from "react-router-dom"
import "./NavLinks.css"
import { useAuthContext } from "../../contexts/auth"
import apiClient from "../../services/apiClient"

export default function NavLinks() {  
  const {user, setUser, setError} = useAuthContext()

  const handleOnLogout = async () =>{
    await apiClient.logoutUser()
    setError(null)
    setUser({})
  }

  return(
    <div className="nav-links">
      <div className="nav">
              <ul className="links">
                <li><Link to="/activity">
                  Activity
                </Link>
                </li>
                <li><Link to="/exercise">
                  Exercise
                </Link>
                </li>
                <li><Link to="/nutrition">
                  Nutrition
                </Link>
                </li>
                <li><Link to="/sleep">
                  Sleep
                </Link>
                </li>
                {user?.email ? <li className="btn logout-button" onClick={handleOnLogout}>
                  <Link to="/">
                    Log out
                  </Link>
                </li>:<><li className="btn">
            <Link to="/login">
              Login
            </Link>
          </li><li className="btn secondary">
              <Link to="/register">
                Sign Up
              </Link>
            </li></>}
                
                
                
                
            </ul>

      </div>

    </div>
  )
}