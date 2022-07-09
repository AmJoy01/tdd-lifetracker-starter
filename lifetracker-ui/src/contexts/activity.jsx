import * as React from "react" 

const sleep = miliseconds => {
    return new Promise(resolve => setTimeout(resolve, miliseconds))
};

const ActivityContext = React.createContext({})

const ActivityContextProvider = (props)=>{
    const [isLoading, setIsLoading] = React.useState(false)
    
    // React.useEffect(()=>{
        
    // }, [])
    const login = () => {
        sleep(2000).then(() => setIsLoading(true))
    }

    const logout = () =>{
        sleep(2000).then(() => setIsLoading(false))
    }

    const authContextValue = {
        login, 
        isLoading, 
        logout
    }
    return <ActivityContext.Provider value = {authContextValue} {...props}/>
} 

const useAuthContext = () => React.useContext(ActivityContext)

export {ActivityContextProvider, useAuthContext}
