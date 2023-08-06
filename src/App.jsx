import { useState } from 'react'
import './App.css'
import Header from '../src/Component/Header'
import MainSection from './Component/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
     <MainSection/>
    </>
  )
}

export default App
