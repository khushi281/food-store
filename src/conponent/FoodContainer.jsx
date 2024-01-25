import React from 'react'
import { Box , Typography} from '@mui/material'
import data from "../data/data"
import FoodCard from './FoodCard'
// import Grid from '@mui/material/Grid'

const FoodContainer = () => {
  return (
    <>
   <Box sx={{marginTop:"10px" }}>
    <Typography variant='h2' sx={{display:"flex" , justifyContent:"center" ,marginBottom:"16px" , marginTop:"10px"}}>Menu</Typography>
       <Box sx={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
         {data.map((item) => <FoodCard key={item.id} item ={item} />)}
       </Box>

   </Box>
    </>
  )
}

export default FoodContainer
