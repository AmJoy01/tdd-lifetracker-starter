import * as React from "react" 
import apiClient from "../services/apiClient"


const ActivityContext = React.createContext({})

const ActivityContextProvider = ({children})=>{
    const [activity, setActivity] = React.useState({})
    const [initialized, setInitialized] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(()=>{
        const fetchActivity = async ()=>{
            setIsLoading(true)
            const { data, error} = await apiClient.fetchUserfromToken()
            if(data){
                setActivity(data.user)
            }
            if(error){
                setError(error)
            }
            const token = localStorage.getItem("lifetracker_token")
            if(token){
                setIsLoading(false)
                apiClient.setToken(token)
                fetchActivity()
            }
        }
    }, [])
    
    const activityContextValue = {
        activity,
        setActivity, 
        error, 
        setError, 
        isLoading, 
        setIsLoading
    }

    return (
        <AuthContext.Provider value = {activityContextValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
} 

const useActivityContext = () => React.useContext(ActivityContext)

export {ActivityContextProvider, useActivityContext}
