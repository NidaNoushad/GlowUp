import React,{useState} from 'react'
import css from './Products.module.css'
import plane from '../Images/plane.png'
import { ProductsData } from '../data/Product'
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Products = () => {
   const [pMenu, setPMenu]=useState(ProductsData)
   const [parent] = useAutoAnimate()
   const filter = (type) => {
    if (type === "All") {
      setPMenu(ProductsData); // Show all products
    } else {
      setPMenu(ProductsData.filter((product) => product.type === type));
     
    }
  }

  return (
    <div className={`container mt-5 ${css.container}`}>
      <div className={`${css.pheading} text-center`}>
        <div className={css.headingimg}>
          <img src={plane} alt='plane' className={css.headingimglogo} />
        </div>
        <h1 className='fw-bold mb-5'>Our Feature Products</h1>
      </div>
      {/* productList */}
      <div className='row mb-5'>
        <div className={`${css.Searchproductlist} col-12 col-md-3`}>
          <ul>
            <li className={`mb-4 fs-4 ${css.searchbyname}`} onClick={()=>filter("All")}>All</li>
            <li className={`mb-4 fs-4 ${css.searchbyname}`} onClick={()=>filter("skin care")}>Skin Care</li>
            <li className={`mb-4 fs-4 ${css.searchbyname}`} onClick={()=>filter("conditioner")}>Conditioner</li>
            <li className={`mb-4 fs-4 ${css.searchbyname}`} onClick={()=>filter("foundation")}>Foundation</li>
          </ul>

        </div>
        
        <div className={`${css.productlistimg} col-12 col-md-9 text-start`} ref={parent}>
          {pMenu.map((product, index) => (
            <div className={css.card} key={index}>
              <div className={css.overflow}>
                <div>
                  <div key={index} className="lefts" style={{ margin: '1rem' }}>
                    <div className="name">
                      <span>{product.name}</span>
                      <span>{product.detail}</span>
                    </div>
                    <span>{product.price}$</span>
                    <a href="#">
                      <button className="button">Shop Now</button>
                    </a>
                  </div>
                </div>
                <img src={product.img} alt={`product ${index}`} className={css.imgp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Products
