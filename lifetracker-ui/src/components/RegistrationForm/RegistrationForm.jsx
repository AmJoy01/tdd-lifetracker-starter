import * as React from "react"
import Navbar from "components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./RegistrationForm.css"

export default function RegistrationForm({setAppState}){
    <Navbar/>

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [form, setForm] = React.useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: ""
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "password") {
          if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "passwordConfirm") {
          if (form.password && form.password !== event.target.value) {
            setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
          } else {
            setErrors((e) => ({ ...e, passwordConfirm: null }))
          }
        }
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
      const signupUser = async () => {
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
    
        if (form.passwordConfirm !== form.password) {
          setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
          setIsLoading(false)
          return
        } else {
          setErrors((e) => ({ ...e, passwordConfirm: null }))
        }
    
        try {
          const response = await axios.post("http://localhost:3001/auth/register", {
            email: form.email,
            username: form.username,
            firstName: form.firstName,
            lastName: form.lastName,
            password: form.password,
            passwordConfirm: form.passwordConfirm
          })
    
          if (response?.data?.user) {
            setAppState(response.data)
            setIsLoading(false)
            navigate("/activity")
          } else {
            setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
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
        <div className="registration-form">
            <div className="container">
                <h2>Register</h2>
                {errors.form && <span className="error">{errors.form}</span>}
                <br />
                <div className="form-input">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter a valid email" 
                        value={form.email}
                        onChange={handleOnInputChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        placeholder="your_username" 
                        value={form.username}
                        onChange={handleOnInputChange}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                    <div className="split-input-field">
                        <div className="input-field">
                            <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            value={form.firstName}
                            onChange={handleOnInputChange}/>
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                        </div>
                        <div className="input-field">
                            <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            value={form.lastName}
                            onChange={handleOnInputChange}
                            />
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                    </div>
                    {/* end of split field */}
                    <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter a secure password" 
                            value={form.password}
                            onChange={handleOnInputChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="input-field">
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input 
                        type="password" 
                        name="passwordConfirm" 
                        placeholder="Confirm your password" 
                        value={form.passwordConfirm}
                        onChange={handleOnInputChange}
                        />
                        {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
                    </div>
                    <button className="submit-registration" disabled={isLoading} onClick={signupUser}>
                        {isLoading ? "Loading..." : "Create Account"}
                    </button>
                </div>
                {/* End of form */}
                <div className="footer">
                    <p>
                        Already have an account? Login <Link to="/login">here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}