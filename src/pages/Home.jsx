import { Container, Grid, Typography , Box , Button  , ImageListItem} from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../assets/1.png'
import "./../style/Home.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import FoodContainer from '../conponent/FoodContainer'
import About from './About'
import Service from './Service'
import Contact from './Contact'


const Home = () => {



  useEffect(() => {
    Aos.init()
   
  },[])

return(
  

 <>
  <Box>
  <Box sx={{ marginTop:"2px" , height:"650px"}}>
   <div className="home" data-aos="fade-down" style={{height:"600px"}}>
   <Grid container spacing={2}>
    <Grid item lg={6} md={12} xs={12}>
      <Typography variant='h1' sx={{fontSize:"70px" , marginLeft:"20px"}}>NON-VEG</Typography>
      <Typography variant='h2'sx={{fontSize:"50px" , marginLeft:"20px" , marginTop:"20px"}}>Tasty & Fresh Food Anytime! Anywhere!</Typography>
      <Typography variant='h4'sx={{fontSize:"20px" , marginLeft:"20px" , marginTop:"20px"}}>There are all type of non-veg food. Just conform your order and enjoy our delicious food.</Typography>
      <Link to="/menu"><Button sx={{fontSize:"18px" , marginLeft:"40px" , marginTop:"40px" , bgcolor:"green" , borderRadius:"25px" , color:"white" , width:"170px"}}>ORDER NOW</Button></Link>
    </Grid>

    <Grid item lg={6} md={12} xs={12}>
        <div data-aos="fade-left">
      <ImageListItem>
    <img sx={{width:"80px" , height:"180px"}}src={Image} alt="" />
      </ImageListItem>
    </div>
    </Grid>
  </Grid>
    </div>
 </Box>
  </Box>
 <FoodContainer />
 <About />
 <Service />
 <Contact />
 </>
)
}
export default Home
