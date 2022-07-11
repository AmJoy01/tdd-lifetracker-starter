import * as React from "react"
import NutritionCard from "components/NutritionCard/NutritionCard"
import { useAuthContext } from "../../contexts/auth"
import { useNutritionContext } from "../../contexts/nutrition"


export default function NutritionFeed(){
    const { user } = useAuthContext()
    const { nutritions } = useNutritionContext()

   return(
    <div className="nutrition-feed">
      {nutritions?.filter((filteredItem) => filteredItem.userId === user.id).map(nutrition => (
      <NutritionCard nutrition={nutrition}/>
      ))}
    </div>
   )
    

}