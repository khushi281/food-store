import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'




const Service = () => {
  return (
    <>
    <Box sx={{marginTop:"40px" , xs:{marginTop:"40px"}}}>
    <div data-aos="fade-right">
      <Grid container spacing={2} sx={{flexWrap:"wrap-reverse"}}>
        <Grid item lg={4} md={12} xs={12}>
          <ImageListItem sx={{width:"450px" , height:"370px" , marginLeft:"60px"}}>
            <Avatar sx={{width:"400px" , height:"370px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKllL9Jg0hMSS-O8UrxbOv29z_B46BKEPNNA&usqp=CAU'/>
          </ImageListItem>
        </Grid>

        <Grid item lg={8} md={12} xs={12}>
          <Typography variant='h1' sx={{fontSize:"55px" , marginTop:"40px" , paddingLeft:"120px"}}>
             Free Delivery Service
          </Typography>
          <Typography variant='h3' sx={{fontSize:"20px" , marginTop:"30px" , color:"grey" , marginLeft:"70px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cumque alias velit, <br/> dolor corporis praesentium vel soluta fugiat dignissimos nesciunt eligendi ex aspernatur quasi earum quam natus consequatur ut. Et!
          </Typography>
        </Grid>
      </Grid>
      </div>
    </Box>
    </>
  )
}

export default Service
