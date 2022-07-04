import { Link, useLocation } from "react-router-dom"
import "./NavLinks.css"

export default function NavLinks() {
  return(
    <div className="nav-links">
      <div className="nav">
          {location.pathname.indexOf("portal") === -1 ? (
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
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li className="btn secondary">
                <Link to="/register">
              Sign Up
            </Link>
                </li>
              </ul>

          ) : null}
      </div>

    </div>
  )
}