 import React from 'react'
 import './Header.css'
 import logo from './amazon_PNG25.png'
 import SearchIcon from '@mui/icons-material/Search';
 import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
 
 function Header() {
   return (
     <div className='header'>
       <img className='header_logo' src={logo} alt="image" />

       <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
       </div>

       <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>
               Hello Guest
            </span>
            <span className='header_optionLineTwo'>
                Sign In
            </span>
        </div>
        <div className='header_option'>
            <span className='header_optionLineOne'>Returns
            </span>
            <span className='header_optionLineTwo'>& Orders
            </span>
        </div>
        <div className='header_option'>
            <span className='header_optionLineOne'>Your
            </span>
            <span className='header_optionLineTwo'>Prime
            </span>
        </div>

        <div className='header_optionBasket'>
            <ShoppingBasketOutlinedIcon/>
            <span className='header_optionLineTwo header_basketCount'>0
            </span>

        </div>

       </div>

     </div>
   )
     
 }
 
 export default Header
 