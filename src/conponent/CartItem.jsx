import { Box, Button, Card , CardContent, CardMedia , ImageListItem, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, remove } from '../features/Cart/CartSlice'


const CartItem = ({item}) => {


    const {cartItem} = useSelector(state => state.cart)
    const dispatch = useDispatch()


    const handleIncrease =() => {
        dispatch(increase(item))
    }


    const handleDecrease = () => {
        dispatch(decrease(item))
    }


    const handleRemoveAll = (id) => {
        dispatch(remove(id))
    }

    // const total = cartItem.reduce((p,c) =>{
    //     return p + c.price * c.qty
    // } , 0)
    const ii = item.price*item.qty
    
  return (
   <>
   <Card  sx={{display:"flex" , minheight:"320px" , borderRadius:"20px" , marginLeft:"30px" , marginTop:"40px" , minWidth:"100%"  }}>
   <Box>
   <CardMedia>
   <ImageListItem sx={{marginTop:"50px" , marginLeft:"30px"  }}>
   <img sx={{height:"20px"}} src={item.image}/>
   </ImageListItem>
    </CardMedia>
   </Box>
    <Box>
        <CardContent>
            <Typography variant='h3' sx={{fontSize:"32px" , textAlign:"center"}}>{item.title}</Typography>
            <Typography variant='h6' sx={{paddingTop:"10px" , fontSize:"16px"}}>{item.description} </Typography>
            <Typography variant='h5' sx={{paddingTop:"10px" , fontSize:"24px" , color:"blue"}}> Price: ₹{ii}</Typography>
            <Typography variant='h6' sx={{paddingTop:"13px"}}>Qty:  <Button variant='outlined' color='success' sx={{width:"1px" , fontSize:"40px" , height:"30px" , color:"green" , textAlign:"center"}} 
            onClick={()=> handleDecrease()}
            >-</Button>  {item.qty} <Button variant='outlined' color='success' sx={{width:"2px" , fontSize:"30px" , height:"30px"}} 
            onClick={() => handleIncrease()}
            >+</Button></Typography>
            <Button variant='contained' color='success' sx={{marginTop:"20px" , marginLeft:"40px" , borderRadius:"40px" }} 
            onClick={() => handleRemoveAll(item.id)}
            >Remove Item</Button>
        </CardContent>
    </Box>
   </Card>

 
   </>
  )
}

export default CartItem
