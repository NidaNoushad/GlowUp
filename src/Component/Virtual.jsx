import React from 'react'
import css from './Virtual.module.css'
import shade from '../Images/shade.png'
import ReactCompareImage from 'react-compare-image';
import before from '../Images/before.png'
import after from '../Images/after.png'
const Virtual = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className={`col text-start p-3 ${css.lefts}`}>
          <h2 className='fw-bold mb-5' style={{fontSize:"35px",marginBottom:"2rem"}}>
          VIRTUAL TRY-ON
          </h2>
          <p className='fw-light mb-3 fs-4'>NEVER BUY THE WRONG <br/> SHADE AGAIN!</p>
          <p className='fw-bold mb-0 pb-0 lead' style={{fontSize:"25px"}}>Try Now!</p>
          <img src={shade} alt="" className={`${css.imgleft}`} />
        </div>
        <div className={`col ${css.right}`}>
        <ReactCompareImage leftImage={before} rightImage={after} />
        </div>

      </div>
    </div>
  )
}

export default Virtual
