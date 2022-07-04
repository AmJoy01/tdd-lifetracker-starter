import * as React from "react"
import Navbar from "components/Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./LoginForm.css"

export default function LoginForm() {
<Navbar/>

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    })
  
    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
    
        try {
          const response = await axios.post(`http://localhost:3001/auth/login`, form)
          if (response?.data) {
            setAppState(response.data)
            setIsLoading(false)
            navigate("/activity")
          } else {
            setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
            setIsLoading(false)
          }
        } catch (err) {
          console.log(err)
          const message = err?.response?.data?.error?.message
          setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
          setIsLoading(false)
        }
      }

  return(
    <div className="login-form">
      <div className="container">
          <h2>Login</h2>
          {Boolean(errors.form) && <span className="error">{errors.form}</span>}
          <br />

          <div className="form">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="user@gmail.com" 
                    value= {form.email}
                    onChange={handleOnInputChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={form.password}
                    onChange={handleOnInputChange}
                />
                 {errors.password && <span className="error">{errors.password}</span>}
              </div>
                <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
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