import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ImageListItem from '@mui/material/ImageListItem'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'






const About = () => {
  return (
   <>
   <Box sx={{height:"400px" , marginTop:"50px"}} >
   <div  data-aos="fade-right">
     <Grid container spacing={2}>
       <Grid item lg={6} md={12} xs={12}>
        <Typography variant='h3' sx={{fontSize:"68px" , marginLeft:"50px" , marginTop:"40px"}}>
         Little About Us
        </Typography>
        <Typography variant='h6' sx={{fontSize:"22px" , marginLeft:"35px" , marginTop:"25px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita beatae est reprehenderit sed molestias, ipsa atque deserunt et, aut ipsam quasi, veritatis consequuntur id laudantium ducimus debitis iure nostrum ad?</Typography>
       </Grid>
       <Grid item lg={6} md={12} xs={12}>
        <CardMedia sx={{borderRadius:"50%"}}>
        <ImageListItem sx={{width:"280px" , marginTop:"40px" , marginLeft:"10px", display:"flex" , gap:"30px" , borderRadius:"50%" }}>
         <div data-aos="zoom-in"> <Avatar sx={{width:"250px" , height:"250px" , bgColor :"red"  }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhE09gdq1DzIdzpspDpqalFzSzMDfKpyG7oA&usqp=CAU'/></div>
         <div data-aos="zoom-in"> <Avatar sx={{width:"250px" , height:"250px" , bgColor :"red", display:{xs:"none",md :"flex", lg:"flex"} }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwHW7esSWKciABpJETwivP-Cwirq4REaFzw&usqp=CAU'/></div>
        </ImageListItem>
        </CardMedia>
       </Grid>
     </Grid>
     </div>
   </Box>
   </>
  )
}

export default About
