import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Aos from 'aos'
import "aos/dist/aos.css"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/Cart/CartSlice';

const FoodCard = ({item}) => {

  const dispatch = useDispatch()

  const {cartItem} = useSelector(state => state.cart)

  const [buttonDisable, setButtonDisable] = useState(false);


  const getFood = () => {
    toast.success("Add TO Cart Success",{
      position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
      })
    dispatch(add(item))
    setButtonDisable(true)

  }

  return (
   <>
   <Box sx={{m:"10px"}}>
    <div data-aos="zoom-in">
   <Card sx={{maxWidth:"300px", height:"420px" , borderRadius:"20px" , boxShadow:"2px solid grey" , marginTop:"20px"}}>
    <CardMedia>
   <ImageListItem>
   <img sx={{height:"50px" , width:"50px"}} src={item.image}/>
   </ImageListItem>
    </CardMedia>

    <CardContent>
     <Typography  variant='h2' sx={{fontSize:"22px" , marginLeft:"15px" , marginBottom:"10px"}}>
        {item.title}
     </Typography>
     <Typography variant='h6' sx={{fontSize:"15px" , marginLeft:"15px" , color:"grey"}}>{item.description}</Typography>
    <Typography  variant='h3' sx={{fontSize:"18px" , marginLeft:"15px" , marginTop:"10px"}}>Price :  ₹{item.price * item.qty}</Typography>
    <Button variant='contained' color='success' sx={{marginTop:"20px" , marginLeft:"60px" , borderRadius:"40px" }} onClick={() => getFood(item)}
     disabled={buttonDisable}
     >
       Add TO Cart </Button>
   
    </CardContent>
    {/* <CardActions>
        <Button sx={{bgcolor:"green" , width:"150px" , height:"40px" , color:"white" , marginLeft:"70px" , borderRadius:"20px"}} size="small">Add To Cart</Button>
      </CardActions> */}
   </Card>
   </div>
   </Box>
   </>
  )
}

export default FoodCard
