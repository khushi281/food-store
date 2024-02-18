import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user , isLoading , isSuccess , isError , message} = useSelector(state => state.auth)

    const [formData , setFormData] = useState({
        email:"",
        password:"",
    })

    const { email, password} = formData


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = (e) => {
     e.preventDefault()
     dispatch(loginUser(formData));
    }


    useEffect(() => {
        if(user){
           navigate("/")
        }

        if(isError && message){
            toast.error(message)
            dispatch(reset())
        }

    } ,[isSuccess , isLoading , isError , message , user])
    
    if(isLoading){
        <Grid container spacing={1}>
            <Grid item lg={12}>
                <Typography  variant='h2'>Loading...</Typography>
            </Grid>
        </Grid>
    }


  return (
    <>
    <Box sx={{width:"100%" , height:"300px" , mt:10, display:"flex" , justifyContent:"center"}}>
        <Card sx={{width:"400px"}}>
    <Typography variant='h4' sx={{textAlign:"center", pt:"20px"}}>Login Here!</Typography>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid conatiner spacing={1}>
                        <Grid item lg={12}>
                            <TextField required  variant='outlined' type='email' label="Enter Email"  fullWidth name='email' value={email} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item lg={12}>
                            <TextField required variant='outlined' type='password' label="Enter Password"  fullWidth sx={{mt:"10px"}} onChange={handleChange} name='password' value={password}></TextField>
                        </Grid>
                    </Grid>
                    <Button variant='contained' type='submit'  fullWidth sx={{mt:"15px"  }}>Login Success</Button>
                </form>
            </CardContent>
 
        </Card> 
    </Box>
    </>
  )
}

export default Login
