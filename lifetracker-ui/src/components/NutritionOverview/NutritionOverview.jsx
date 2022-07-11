import * as React from "react"
import NutritionFeed from "../NutritionFeed/NutritionFeed"
import { useAuthContext } from "../../contexts/auth"
import { Link } from "react-router-dom"

import "./NutritionOverview.css"
export default function NutritionOverview(){
    const { user, setUser } = useAuthContext()

    return(
        <div className="nutrition-overview">
            <div className="header">
                <h3>Overview</h3>
                <Link to="/nutrition/create">
                <button className="Button outline small outline aqua">
                    Record Nutrition
                </button>
                </Link>
            </div>
            <div className="feed">

                {/* <div className="empty-message">
                    <h2>Nothing here yet.</h2>
                </div> */}
                    <NutritionFeed/>
            </div>
        </div>
    )
}