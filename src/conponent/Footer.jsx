import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ImageListItem from '@mui/material/ImageListItem'
import "../style/Home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Link } from "react-router-dom";





const Footer = () => {
  return (
  <>
   <Box sx={{marginTop:"50px" , bgcolor:"rgb(243, 240, 244)"}}>
    <Grid container spacing={1} sx={{paddingTop:"30px" , paddingBottom:"30px" , xs:{display:"flex" , justifyContent:"center" , alignContent:"center" , marginLeft:"70px"}}}>
     <Grid item lg={4} sm={4} xs={12} >
        <Typography variant="h3" sx={{ marginLeft:"50px" , marginTop:"30px"}}>Quick Links</Typography>
        <ul className='list' style={{color:"black" , marginTop:"20px" , marginLeft:"70px" , listStyle:"none" , color:"black" }}>
            <li style={{marginTop:"10px"}}><Link to="/" style={{color:"black" , textDecoration:"none" , fontSize:"22px" , fontWeight:"400"}}>Home</Link> </li>
            <li  style={{marginTop:"10px"}}><Link to="/about" style={{color:"black" , textDecoration:"none" , fontSize:"22px" , fontWeight:"400"}}>About</Link> </li>
            <li  style={{marginTop:"10px"}}><Link to="/menu" style={{color:"black" , textDecoration:"none" , fontSize:"22px" , fontWeight:"400"}}>Menu</Link> </li>
            <li  style={{marginTop:"10px"}}><Link to="/service" style={{color:"black" , textDecoration:"none" , fontSize:"22px" , fontWeight:"400"}}>Service</Link> </li>
            <li  style={{marginTop:"10px"}}><Link to="/contact" style={{color:"black" , textDecoration:"none" , fontSize:"22px" , fontWeight:"400"}}>Contact</Link> </li>
        </ul>
     </Grid>
     <Grid item lg={4} sm={4} xs={12}>
     <ImageListItem  sx={{ width: 120, height: 30 , marginLeft:"90px" , marginBottom:"30px" }} cols={5}>
      <img
        src={"https://static.freshtohome.com/images/logo/2021/logo-medium.png"}
        />
    </ImageListItem>
    <Typography variant='h6' sx={{fontSize:"20px" , textAlign:"center"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugit, aut maiores aperiam ullam tempora ad libero laborum ratione corrupti distinctio.</Typography>
     <Box sx={{display:"flex" , justifyContent:"space-between" , width:"80%" , marginLeft:"10px" }}>
    <Link to="/contact"> <Button sx={{borderRadius:"50%", width:"50px" , height:"60px" , bgcolor:"grey", color:"white"  , display:"flex" , alignItems:"center" , justifyContent:"center" , marginTop:"26px" }}>
      <FacebookIcon  sx={{fontSize:"36px"}}/>
      </Button>
      </Link>
      <Link to="/contact">  <Button sx={{borderRadius:"50%", width:"50px" , height:"60px" , bgcolor:"grey", color:"white"  , display:"flex" , alignItems:"center" , justifyContent:"center" , marginTop:"26px" }}>
      <TwitterIcon  sx={{fontSize:"36px"}}/>
      </Button>
      </Link>
     <Link to="/contact" ><Button sx={{borderRadius:"50%", width:"50px" , height:"60px" , bgcolor:"grey", color:"white"  , display:"flex" , alignItems:"center" , justifyContent:"center" , marginTop:"26px" }}>
      <LinkedInIcon  sx={{fontSize:"36px"}}/>
      </Button>
      </Link>
     <Link to="/contact"> <Button sx={{borderRadius:"50%", width:"50px" , height:"60px" , bgcolor:"grey", color:"white"  , display:"flex" , alignItems:"center" , justifyContent:"center" , marginTop:"26px" }}>
      <YouTubeIcon  sx={{fontSize:"36px"}}/>
      </Button>
      </Link>
     </Box>
     </Grid>

     <Grid item lg={4} sm={4} xs={12}>
        <Typography variant='h3' sx={{marginTop:"20px"}}>Conatct Us</Typography>
         <Typography variant='h6' sx={{marginTop:"30px"}}> <LocationOnIcon  sx={{color:"green" , fontSize:"30px"}}/> 57 Main Street, 2nd Block 3rd Floor,Indore</Typography>
         <Typography variant='h6' sx={{ marginTop:"20px"}}><EmailIcon sx={{color:"green" , fontSize:"30px"}}/>   freshtohome@gmail.com , fth@gmail.com</Typography>
        <Typography variant='h6' sx={{ marginTop:"20px"}}><CallIcon sx={{color:"green" , fontSize:"30px"}}/>    919234567893 , 919987654321</Typography>

     </Grid>
    </Grid>
    </Box>
  </>
  )
}

export default Footer
