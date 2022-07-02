import Navbar from "components/Navbar/Navbar";
import { Link } from "react-router-dom";

import "./RegistrationPage.css"

export default function RegistrationPage(){
    <Navbar/>

    return(



        <div className="registration-page">
            <div className="container">
                <h2>Register</h2>
                <br />
                <div className="form">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter a valid email" value=""/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="your_username" value=""/>
                    </div>
                    <div className="split-input-field">
                        <div className="input-field">
                            <input type="text" name="firstName" placeholder="First Name" value=""/>
                        </div>
                        <div className="input-field">
                            <input type="text" name="lastName" placeholder="Last Name" value=""/>
                        </div>
                    </div>
                    {/* end of split field */}
                    <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter a secure password" value=""/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input type="password" name="password-confirm" placeholder="Confirm your password" value=""/>
                    </div>
                    <button className="btn">Create Account</button>
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