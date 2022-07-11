import NavLinks from "../NavLinks/NavLinks"
import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar({user, setUser}) {
  return(
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo" />
        </Link>
      </div>
      <NavLinks user={user} setUser={setUser}/>
    </nav>
  )
}