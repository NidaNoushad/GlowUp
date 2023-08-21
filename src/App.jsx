import { useState } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import MainSection from './Component/MainSection'
import SwipperSlider from './Component/SwipperSlider'
import  Virtual  from './Component/Virtual'
import Products from './Component/Products'
// import Slider from './Component/Slider'
import Testimonials from './Component/Testimonials'


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
    </>
  )
}

export default App
