import RegistrationForm from "../RegistrationForm/RegistrationForm"
import "./RegistrationPage.css"

export default function RegistrationPage(props){

    return(
        <div className="registration-page">
            <RegistrationForm setAppState = {props.setAppState}/>
        </div>
    )
}