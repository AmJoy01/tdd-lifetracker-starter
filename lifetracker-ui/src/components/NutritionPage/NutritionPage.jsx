import "./NutritionPage.css"
import { Routes, Route } from "react-router-dom"
import { useAuthContext } from "../../contexts/auth"
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition"
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import NutritionNew from "components/NutritionNew/NutritionNew"
export default function NutritionContainer(){
    return (
        <NutritionContextProvider>
            <NutritionPage/>
        </NutritionContextProvider>
    )
}

function NutritionPage(){
    const { user } = useAuthContext()
    const { nutritions, setNutritions } = useNutritionContext()

    return(
        <div className="nutrition-page">
            <div className="banner">
                <h1>Nutrition</h1>
            </div>
            <div className="container">
            <Routes>
                <Route path= "/" element= {<NutritionOverview/>}/>
                <Route path= "/create" element= {<NutritionNew/>}/>
            </Routes>
            </div>
        </div>
    )
}