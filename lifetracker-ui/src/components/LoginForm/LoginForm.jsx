import * as React from "react"
import Navbar from "components/Navbar/Navbar"
import { Link, useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"
import "./LoginForm.css"
import { useAuthContext } from "../../contexts/auth"

export default function LoginForm() {
<Navbar/>
    const { user, setUser} = useAuthContext()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    })
  
    React.useEffect(() => {
      if(user?.email) {
        navigate("/activity")
      }
    }, [user,navigate])

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
    
        const {data, error} = await apiClient.loginUser({ email: form.email, password: form.password})
        if(error){
          setErrors((e) => ({ ...e, form: error}))
        } 
        if(data?.user) {
          setUser(data.user)
          apiClient.setToken(data.token)
        }

        setIsLoading(false)
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