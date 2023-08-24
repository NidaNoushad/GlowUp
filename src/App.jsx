import { useState } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import MainSection from './Component/MainSection'
import SwipperSlider from './Component/SwipperSlider'
import  Virtual  from './Component/Virtual'
import Products from './Component/Products'
//  import Slider from './Component/Slider'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSection/>
     {/* <Slider/> */}
     <SwipperSlider/>
     <Virtual/>
     <Products/>
     <Testimonials/>
   <Footer/>
    </>
  )
}

export default App
