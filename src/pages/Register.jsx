
import { Box, Card, CardContent, Grid, TextField, Typography , Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user , isSuccess , isLoading , isError , message} = useSelector(state => state.auth )
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
    })

    const {name , email , password , password2} = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      if(password !== password2){
        toast.error("Password not match!",{
            position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
            })
        // window.alert("wrong password")
      }
      dispatch(registerUser(formData))
    //   if(password === password2){
    //     toast.success("Register Successfully",{
    //         position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //         })
    //   }
    
      
    }


    useEffect(() => {
        if(user || isSuccess){
            toast.success("Register Successfully",{
                        position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                        })
          navigate("/")
        }
        if(isError && message){
            toast.error(message)
        }

        if(isLoading){
            <Grid container spacing={1}>
                <Grid item lg={12}>
                    <Typography variant='h2'>Loading...</Typography>
                </Grid>
            </Grid>
        }
    },[user , isSuccess , isLoading , isError , message])
  return (
    <>
    <Box sx={{width:"100%" , height:"430px" , mt:10, display:"flex" , justifyContent:"center"}}>
        <Card sx={{width:"400px"}}>
    <Typography variant='h4' sx={{textAlign:"center", pt:"20px"}}>Register Here!</Typography>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid conatiner spacing={1}>
                        <Grid item lg={12}>
                            <TextField required variant='outlined' type='text' label="Enter Name" fullWidth name='name' value={name} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item lg={12}>
                            <TextField required variant='outlined' type='email' label="Enter Email"  fullWidth sx={{mt:"10px" , color:"black"}} name='email' value={email} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item lg={12}>
                            <TextField required variant='outlined' type='password' label="Enter Password"  fullWidth sx={{mt:"10px"}} name='password' value={password} onChange={handleChange}></TextField>
                        </Grid>
                        <Grid item lg={12}>
                            <TextField required variant='outlined' type='password' label="Enter Confirm Password" fullWidth sx={{mt:"10px"}} name='password2' value={password2} onChange={handleChange}></TextField>
                        </Grid>
                    </Grid>
                    <Button variant='contained' type='submit' fullWidth sx={{mt:"15px"}}>Register Success</Button>
                </form>
            </CardContent>
 
        </Card>
    </Box>
    </>
  )
}

export default Register
