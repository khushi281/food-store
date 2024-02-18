import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'



const Contact = () => {
  return (
   <>
   <Box>
   <div  data-aos="fade-right">
    <Typography variant='h1' sx={{fontSize:"70px" , textAlign:"center" , marginTop:"30px"}}>Contact</Typography>
    <Grid container spacing={2} sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , marginTop:"30px" , gap:"40px"}}>
      <Grid item lg={3} md={3} xs={8} bgcolor={"#f8fbf3"} sx={{display:"flex" , marginTop:"40px"  , height:"170px" , borderRadius:"10px"}}>

        <ImageListItem>
          <img style={{width:"58px" , height:"70px" , marginLeft:"20px" , marginTop:"20px"}} src='https://demo.webtend.net/html/munfirm/assets/images/contact/icon1.png'/>
        </ImageListItem>
        <Box sx={{display:"flex" , flexDirection:"column" , marginLeft:"30px" , marginRight:"30px"}}>
        <Typography variant='h1' sx={{fontSize:"30px"}}>Location</Typography>
       
        <Typography variant='h6' sx={{fontSize:"17px" , marginTop:"20px"}}>57 Main Street, 2nd Block 3rd Floor,Indore</Typography>
        
        </Box>
      </Grid>

      <Grid item lg={3} md={3} xs={8} bgcolor={"#f8fbf3"} sx={{display:"flex" , marginTop:"40px" , height:"170px" , borderRadius:"10px"}}>

        <ImageListItem>
          <img style={{width:"58px" , height:"70px" , marginLeft:"20px" , marginTop:"20px"}} src='https://demo.webtend.net/html/munfirm/assets/images/contact/icon2.png'/>
        </ImageListItem>
        <Box sx={{display:"flex" , flexDirection:"column" , marginLeft:"30px" , marginRight:"30px"}}>
        <Typography variant='h1' sx={{fontSize:"30px"}}>Email Us</Typography>
       
        <Typography variant='h6' sx={{fontSize:"17px" , marginTop:"20px"}}>freshtohome@gmail.com</Typography>
        <Typography variant='h6' sx={{fontSize:"17px" , marginTop:"5px"}}>fth@gmail.com</Typography>

        
        </Box>
      </Grid>

      <Grid item lg={3} md={6} xs={8} bgcolor={"#f8fbf3"} sx={{display:"flex" , marginTop:"40px"  , height:"170px" , borderRadius:"10px"}}>

        <ImageListItem>
          <img style={{width:"72px" , height:"72px" , marginLeft:"20px" , marginTop:"20px"}} src='	https://demo.webtend.net/html/munfirm/assets/images/contact/icon3.png'/>
        </ImageListItem>
        <Box sx={{display:"flex" , flexDirection:"column" , marginLeft:"30px" , marginRight:"30px"}}>
        <Typography variant='h1' sx={{fontSize:"30px"}}>Phone Us</Typography>
       
        <Typography variant='h6' sx={{fontSize:"17px" , marginTop:"20px"}}>+919234567893</Typography>
        <Typography variant='h6' sx={{fontSize:"17px" , marginTop:"5px"}}>+919987654321</Typography>

        
        </Box>
      </Grid>

    </Grid>

    <Grid container spacing={1} sx={{padding:"30px" , marginTop:"40px"}}>
      <Grid item lg={6} xs={12}>
        <Typography variant='h3' sx={{textAlign:"center"}}>Contact With Us</Typography>
        <Typography variant='h5' sx={{textAlign:"center" , paddingTop:"20px" , paddingBottom:"20px"}}>Send Us Message</Typography>

       <Card >
        <div data-aos="zoom-in">
        <CardContent>
       
       <Grid conatiner spacing={1}>
        <Grid item lg={12} sm={12} xs={12} sx={{paddingTop:"20px"}}>
          <TextField  variant = "outlined" type='text' label='Full Name' fullWidth >
          </TextField>
        </Grid>
        <Grid item lg={12} sx={{my:"10px"}}>
          <TextField  variant = "outlined"  type='number' label="Phone" fullWidth >
          </TextField>
        </Grid>

        <Grid item lg={12}>
          <TextField variant = "outlined" type='email' fullWidth label="Email">
          </TextField>
        </Grid>
        <Grid item lg={12} sx={{my:"10px"}}>
          <TextField id="outlined-multiline-static" variant = "outlined" type='text' fullWidth label="Message" multiline
          rows={4} >
          </TextField>
        </Grid>

        <Button type='submit' variant="outlined" sx={{marginLeft:"160px" , marginTop:"20px"}}> Send Message</Button>
       </Grid>
      
       </CardContent>
       </div>
       </Card>
      </Grid>

    <Grid item lg={6} xs={12}>
      <ImageListItem>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJpP6SoU7WPjrW6zssrZHuyc4U55Lofk3XA&usqp=CAU'/>
      </ImageListItem>
    </Grid>

    </Grid>
    </div>
   </Box>


   </>
  )
}

export default Contact
