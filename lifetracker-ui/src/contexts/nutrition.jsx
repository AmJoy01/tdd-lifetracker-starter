import * as React from "react"
import apiClient from "../services/apiClient"

const NutritionContext = React.createContext(null)

const NutritionContextProvider = ({ children }) => {
    const [nutritions, setNutritions] = React.useState([])
    const [initialized, setInitialized] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        const getNutrition = async () => {
            setIsLoading(true)
            
            const {data, error } = await apiClient.listOfNutrition()
            if(data){
                setNutritions(data.nutrition)
            }
            if(error){
                setError(error)
            }
            
            setIsLoading(false)
            setInitialized(true)
        }
        getNutrition()
    }, [])
    
    const nutritionContextValue = {
        nutritions,
        setNutritions,
        initialized,
        setInitialized, 
        isLoading, 
        setIsLoading,
        error,
        setError
    }

    return (
        <NutritionContext.Provider value={nutritionContextValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )
}

const useNutritionContext = () => React.useContext(NutritionContext)

export {NutritionContextProvider, useNutritionContext}