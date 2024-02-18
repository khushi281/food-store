import React from 'react'
import useAuthStatus from '../Hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

    const {isLoggedIn , checkingStatus} = useAuthStatus()

    if(checkingStatus){
        return(
            <h1>Loading...</h1>
        )
    }
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"}/>
}

export default PrivateRoutes
