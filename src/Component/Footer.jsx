import React from 'react'
import css from './Footer.module.css'
import LogoImage from '../Images/Logo1.png';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import {GoSignIn,GoPeople,GoLink} from 'react-icons/go'; 

const Footer = () => {
  return (
    <div className='container-fluid'>
      <hr />
      <div className='row m-2'>
        <div className={`${css.footeralign}  col-md-2 col-12`}>
          <div className={css.imgbox}>
          <a href="" style={{textDecoration:"none",color:"white"}}>
            <img src={LogoImage} alt="logo" style={{width:"100%"}} /></a>
          </div>
        </div>
        <div className={`${css.footeralign} col-md-3 col-6`}>
          <ul className={css.footerlist}>
            <li className='mb-3 fw-bold'>Contact Us</li>
            <li>
            <a href="" style={{textDecoration:"none",color:"white"}}>
              <span className={css.reacticon}><CiLocationOn /></span>
              <span className={css.footerinfo}>111 north avenue Orlando, FL 32801</span></a>
            </li>
            <li>
            <a href="" style={{textDecoration:"none",color:"white"}}>
              <span className={css.reacticon}><IoCallOutline /></span>
              <span className={css.footerinfo}>352-306-4415</span></a>
            </li>

          </ul>
        </div>
        <div className={`${css.footeralign} col-md-2 col-6 text-center`}>
          <ul className={css.footerlist}>
            <li className='mb-3 fw-bold'>Account</li>
            <li>
            <a href="" style={{textDecoration:"none",color:"white"}}>
              <span className={css.reacticon}><GoSignIn/></span>
              <span className={css.footerinfo}>Sign In</span></a>
            </li>
          </ul>
        </div>
        <div className={`${css.footeralign} col-md-2 col-6  text-center`}>
          <ul className={css.footerlist}>
            <li className='mb-3 fw-bold'>Company</li>
            <li>
            <a href="" style={{textDecoration:"none",color:"white"}}>
              <span className={css.reacticon}><GoPeople/></span>
              <span className={css.footerinfo}>About us</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={`${css.footeralign} col-md-3 col-6 text-start`}>
          <ul className={css.footerlist}>
            <li className='mb-3 fw-bold'>Resources</li>
            <li>
              <a href="" style={{textDecoration:"none",color:"white"}}>
              <span className={css.reacticon}><GoLink/></span>
              <span className={css.footerinfo}>Safety Privacy & Terms</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center ' style={{fontSize:"10px"}}>
        <p className='mb-0'>Copyright ©2023 by GlowUp, Inc.</p>
           <p className='mb-0'>All rights reserved.</p>

      </div>
    </div>
  )
}

export default Footer
