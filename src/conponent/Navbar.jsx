import  React, { useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./../style/Navbar.css"
import AdbIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Button, Drawer, ImageList,  ImageListItem } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/auth/authSlice';
import { resets } from '../features/Cart/cartSlice';


function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate() 

  

  const [draweropen , setDrawenopen] = useState(false)
  const [open , setOpen] = useState(false)
   const [carts , setCarts] = useState(false)

  const {cartItem} = useSelector(state => state.cart)
  const {user} = useSelector(state => state.auth)

  const handleLogOut = () => {
      dispatch(logOutUser())
      navigate("/login")
  }
  const handleDrawerOpen = () => {
    setDrawenopen(!draweropen)
  }

  const handleOpen = () =>  {
    setOpen(!open)
  }

  const handleCarts = () =>  {
    setCarts(!carts)
  }


  const drawer = (
        <Box onClick ={handleDrawerOpen} sx={{textAlign:"center" , mr:4 , mt:5 , bgcolor:"black"}}>
        <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              flexGrow:1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              mx:15
            }}
            >
           
          </Typography>


<ul className='mobile-navigation'>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/menu">Menu</Link></li>
  <li><Link to="/service">Service</Link></li>
  <li><Link to="/contact">Contact</Link></li>

</ul>


</Box>
  )

const dd = (
 <Box onClick={handleOpen} sx={{textAlign:"center" , mr:2 , mt:5 , bgcolor:"black"}}>
        <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              flexGrow:1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              mx:15
            }}
            >
           
          </Typography>

          <ul className='mobile-navigation'>
      {
        !user ? <>
        (<Link to="/login"> <li className='btn'> <Button  size='small' sx={{width:"20px" , color:"white" , fontSize:"17px"}}>Login</Button></li></Link> 
      <Link to= "/register">  <li className='btn'> <Button size='small' sx={{width:"100px" , color:"white"  , fontSize:"17px"}}>Register</Button></li></Link> )
        </> : (
          <li className='btn'><Button  size='small'sx={{width:"70px" , color:"white"  , fontSize:"17px"}} onClick={handleLogOut}>LogOut</Button></li>

        )
      }
          </ul>

 </Box>
) 


  
useEffect(() => {
  if(!user){
    dispatch(resets())
  }
  
},[user])
  return (
   
    <Box className="box">
    <AppBar component={"nav"} position="fixed" sx={{py:1 , bgcolor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar > 
      <IconButton aria-label='open drawer' edge="start" sx={{mr:5 , display:{sm:"none"}}} onClick={handleDrawerOpen} ><MenuIcon/></IconButton>
   <Link to="/"> <ImageListItem  sx={{ width: 100, height: 20 , display:{sm:"flex"} }} cols={5}>
      <img
        src={"https://static.freshtohome.com/images/logo/2021/logo-medium.png"}
        />
    </ImageListItem>
    </Link>
 
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              flexGrow:1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              mx:15
            }}
            >
          </Typography>
          
          <Box sx={{ flexGrow:1 ,mr:2,  display: { xs: 'none', md: 'flex'  , sm:"block"} }}>

            <ul className='navigation-menu'>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          

          </Box>
          <Box sx={{width:"300px" , display:"flex" , justifyContent:"space-between" , ml:5}}>
         

       </Box>

         <Box> 
          {
            !user ? ( <AdbIcon aria-label='open drawer' onClick={handleOpen} edge="end"  sx={{  color:"black" , cursor:"pointer", mr:2 , ml:5  , height:"36px" , width:"40px"}} >
            <Typography
               variant="h6"
               noWrap
               component="a"
               
               sx={{
                 mr: 2,
                 flexGrow:1,
                 display: { xs: 'flex', md: 'flex' },
                 fontFamily: 'monospace',
                 fontWeight: 700,
                 letterSpacing: '.3rem',
                 color: 'white',
                 textDecoration: 'none',
                 mx:15
               }}
               >
             </Typography>
           
             </AdbIcon>
         )  : (<Avatar alt="Remy Sharp" onClick={handleOpen} style={{color:"blue" , height:"40px" , cursor:"pointer"}} sx={{mr:2}} src="data:image/png;base64,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" />)
          }
          
          </Box>
          <Link to="carts/cart">
         <ShoppingCartIcon  onClick={handleCarts}  sx={{ display: { xs: 'flex', md: 'flex'  , color:"black" } , ml:2, height:"30px" , width:"40px" }}/> <span   style={{height:"30px" , width:"30px" , bgcolor:"black" ,position:"absolute" , right:"3px" , bottom:"33px", color:"black" , fontWeight:"bold"}}>
        {cartItem.length}
        </span>
        </Link>
        
        </Toolbar>
      </Container>
    </AppBar>
    <Box component={"nav"}>
      <Drawer variant='temporary' open={draweropen} onClose={handleDrawerOpen} sx={{display:{xs:"block" , sm:"none"} ,"& .MuiDrawer-paper": {
        boxSizing:"border-box",
        width:"240px",
        bgcolor:"black"
      }}}
      >
        {drawer}
      </Drawer>
      </Box>
      <Box >
      <Drawer variant='temporary'  open={open} onClose={handleOpen} sx={{display:{xs:"flex" , sm:"flex"},"& .MuiDrawer-paper": {
        boxSizing:"border-box",
        textAlign:"center",
        width:"200px",
        bgcolor:"black",
       
      
      }}}
      >
        {dd}
      </Drawer>
      </Box>
    <Box sx={{p:1}}>
    <Toolbar />
    </Box>
    </Box>
  
  );
}
export default Navbar;