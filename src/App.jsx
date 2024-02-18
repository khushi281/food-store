import React from 'react'
import Navbar from './conponent/Navbar'
import Home from './pages/Home'
// import { FoodProvider } from './context/Foodcontext'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Cart from './pages/Cart'
import Box from '@mui/material/Box'
import FoodContainer from './conponent/FoodContainer'
import Footer from './conponent/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import PrivateRoutes from './conponent/PrivateRoutes'


// import Navbarw from './conponent/Navbarw'


const App = () => {
  return (
   <Router>
      {/* <FoodProvider> */}
          <Navbar />
          {/* <Navbarw /> */}
           <Box>
          <Routes >
           <Route element={<Home />} path='/'/>
           <Route element={<PageNotFound />} path='*'/>

            <Route element={<About />} path='/about'/>
            <Route element={<FoodContainer />} path='/menu'/>
            <Route element={<Contact />} path='/contact'/>
            <Route element={<Service />} path='/service'/>
            {/* <Route element={<Cart />} path='/cart'/> */}
            <Route element={<Login />} path='/login'/>
            <Route element={<Register />} path='/register'/>
            <Route element={<PrivateRoutes />} path='/carts'>
              <Route element={<Cart />} path="cart" />
            </Route>
           </Routes>
           </Box>
            <ToastContainer />
           <Footer />
         {/* </FoodProvider> */}
   </Router>
  )
}

export default App
