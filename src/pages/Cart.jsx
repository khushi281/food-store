import { Box, Grid,  Card , CardContent , Typography , Button } from '@mui/material'
import React, { useEffect } from 'react'
import CartItem from '../conponent/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

// import FoodContext from '../context/Foodcontext'

const Cart = () => {

  // const {cartItem} = useContext(FoodContext)

  const {cartItem} = useSelector(state => state.cart)
  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()
 
  const dispatch = useDispatch()

 
  const total = cartItem.reduce((p, c) => {
    return p + c.price * c.qty;
  }, 0);

  const gst = (total*12)/100

  const final = total + gst

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
   
  } ,[user])


  if(cartItem.length === 0){
    return(
    <Typography variant='h5' sx={{height:"200px" , display:"flex" , justifyContent:"center" , alignItems:"center" , fontSize:"40px"}}>No Items In Your Cart...</Typography>

    )
  }
  else{
  return (
   <>
   <Box sx={{display:"flex" }}>
    
   <Grid container spacing={1} sx={{display:"flex" , justifyContent:"space-between"}}>
      <Grid item lg={6} xs={12} md={12}>
      {cartItem.map((item) => <CartItem key={item.id} item={item}/>)}
      </Grid>
    <Grid item lg={4} xs={12} md={12}>
      {/* <Box> */}
        <Card sx={{ marginTop:"50px" , width:"280px" , textAlign:"center"}}>
           <CardContent>
             <Typography variant='h5' sx={{fontSize:"32px" , fontWeight:"700"}}>Total Bill</Typography>
             <Typography variant='h6' sx={{paddingTop:"40px" , fontSize:"22px" , fontWeight:"600"}}> ₹{total}</Typography>
             <Typography variant='h6' sx={{paddingTop:"20px"}}>GST: 12%</Typography>
             <Typography variant='h6' sx={{paddingTop:"12px", fontWeight:"bold" , fontSize:"22px"}}>Total Amount:<br />  ₹{final}</Typography>
             <Button variant="contained" sx={{marginTop:"20px" , bgcolor:"navyblue"}}>Pay Now</Button>


           </CardContent>
        </Card>
      {/* </Box> */}
    </Grid>
    </Grid>
    
   </Box>
   </>
  )
}
}
export default Cart
