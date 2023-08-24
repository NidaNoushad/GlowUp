import React, { useState } from 'react'
import css from './Header.module.css'
import LogoImage from '../Images/Logo1.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav role="navigation" className='container-fluid'>
     
       <div className="row " >
        <div className='col-2 col-md-1'>
          <div className={css.menuToggle}>
            <input type="checkbox" checked={isMenuOpen} onChange={handleMenuToggle} />
            <span></span>
            <span></span>
            <span></span>

            <ul className={css.menu}>
              <a href="#"><li>Collection</li></a>
              <a href="#"><li>Brands</li></a>
              <a href="#"><li>New</li></a>
              <a href="#"><li>Sales</li></a>
            </ul>
          </div>
        </div>
       
        <div className='col-2 col-md-1  d-flex justify-content-center align-items-center'>
            <a href='#' className={css.carticondiv}> <i className={` ${css.carticon} fa-solid fa-cart-shopping text-start mb-4`} style={{ color: "#f0ebf4" }}></i></a>
        </div>

        <div className={` col-8 col-md-10 text-end`}>
            <a href='#'className={css.logo}><img src={LogoImage} style={{height:"auto",maxWidth:"100%", display:"block"}} alt="GLOWUPLOGO"/></a>
        </div>
      </div> 
    </nav>

  )
}

export default Header
