import React,{useState} from 'react'
import css from './Header.module.css'
import LogoImage from '../Images/Logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
  return (
     <nav role="navigation" className='container-fluid'>  
     <div className='row'>
      {/* Hamburger Menu Section */}
      {/* <div className={`${css.RightSection} col-5`}> */}
     <div className={`${css.menuToggle} col-1`}>
      {/* <input type="checkbox" /> */}
      <input type="checkbox" checked={isMenuOpen} onChange={handleMenuToggle} />  
      <span></span>
      <span></span>
      <span></span> 
       
      <ul  className={css.menu}>
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Info</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
      </ul>
   </div>
      
       {/* cart logo */}
    <div className='col-3 text-start' style={{padding:"20px"}}>
   <a href='#' className='mb-4'> <i className="fa-solid fa-cart-shopping text-start mb-4" style={{color: "#f0ebf4"}}></i></a>
    </div>
      
      <div className={`${css.logo} col-8 text-end`}>   
        <a href='#' style={{margin:"20px"}}><img src={LogoImage} alt="GLOWUPLOGO" /></a>
      </div>
   </div>
  </nav>



  )
}

export default Header
