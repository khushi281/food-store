import  React, { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./../style/Navbar.css"
import AdbIcon from '@mui/icons-material/AccountCircle';
import { Drawer, ImageList,  ImageListItem } from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


function Navbar() {
  const [draweropen , setDrawenopen] = useState(false)

  const {cartItem} = useSelector(state => state.cart)

  
  const handleDrawerOpen = () => {
    setDrawenopen(!draweropen)
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
  return (
   
    <Box className="box">
    <AppBar component={"nav"} position="fixed" sx={{py:1 , bgcolor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar > 
      <IconButton aria-label='open drawer' edge="start" sx={{mr:10 , display:{sm:"none"}}} onClick={handleDrawerOpen} ><MenuIcon/></IconButton>
    <ImageListItem  sx={{ width: 90, height: 30 , display:{sm:"flex"} }} cols={5}>
      <img
        src={"https://static.freshtohome.com/images/logo/2021/logo-medium.png"}
        />
    </ImageListItem>
 
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

          {/* <AdbIcon sx={{ display: { xs: 'flex' , md: 'flex' , justifyContent:"space-between" ,  color:"black"}, mr:2 , ml:10}} /> */}
          <Link to="/cart" >   <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'flex'  , color:"black" } }}  /> <span   style={{height:"30px" , width:"30px" , bgcolor:"black" ,position:"absolute" , right:"1px" , bottom:"30px", color:"black" , fontWeight:"bold"}}>
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
    <Box sx={{p:1}}>
    <Toolbar />
    </Box>
    </Box>
  
  );
}
export default Navbar;