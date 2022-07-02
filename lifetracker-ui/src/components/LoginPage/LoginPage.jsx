import Navbar from "components/Navbar/Navbar"
import { Link } from "react-router-dom"

import "./LoginPage.css"

export default function LoginPage() {
<Navbar/>
  return(
    <div className="login-page">
      <div className="container">
          <h2>Login</h2>
          <br />
          <div className="form">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="user@gmail.com" value= ""/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" value= ""/>
              </div>
              <button className="btn">Login</button>
              <div className="footer">
                <p>
                  Don't have an account? Sign up {<Link to="/register">
                      here.
                  </Link>}
                  
                </p>
              </div>
          
          </div>
          {/* End of form */}
      </div>
    </div>
  )
}