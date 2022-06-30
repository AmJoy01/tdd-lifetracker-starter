import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return(
    <div className="navbar">
      <div className="nav">
          <ul className="logo">
              <li>
                <Link to="/">
                    <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo" />
                </Link>
              </li>
          </ul>
          {location.pathname.indexOf("portal") === -1 ? (
              <ul className="links">
                <li><Link to="/activity">
                  Activity
                </Link>
                </li>
                <li><Link to="/nutrition">
                  Nutrition
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