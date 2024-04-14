import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {

    const [products , updateproducts] = useState([]);

    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>
            res.json()
        )
        .then(json=>updateproducts(json))
        .catch(err=>{
            console.log(err);
        })
    },[])


  return (
    <div className='flex flex-wrap'>
        {
          products.map((item)=>{
            return(
              <Product item={item}/>
            )
          })
        }
    </div>
  )
}

export default ProductList