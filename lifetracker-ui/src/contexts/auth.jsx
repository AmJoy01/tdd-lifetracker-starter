import * as React from "react" 
import apiClient from "../services/apiClient"


const AuthContext = React.createContext({})

const AuthContextProvider = ({children})=>{
    const [user, setUser] = React.useState({})
    const [initialized, setInitialized] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(()=>{
        const getUser = async ()=>{
            setIsProcessing(true)
            const { data, error} = await apiClient.fetchUserfromToken()
            if(data){
                setUser(data.user)
            }
            if(error){
                setError(error)
            }
            const token = localStorage.getItem("lifetracker_token")
            if(token){
                setIsProcessing(false)
                apiClient.setToken(token)
                getUser()
            }
        }
    }, [])
    
    const authContextValue = {
        user,
        setUser, 
        error, 
        setError, 
        isProcessing, 
        setIsProcessing
    }

    return (
        <AuthContext.Provider value = {authContextValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
} 

const useAuthContext = () => React.useContext(AuthContext)

export {AuthContextProvider, useAuthContext}
