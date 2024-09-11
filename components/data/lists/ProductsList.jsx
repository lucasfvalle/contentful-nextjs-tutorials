import React from 'react';
import ProductCard from '../cards/ProductCard'

const ProductsList = ({product}) =>{
    return(
        <div>
         {product.map((sProduct) => (
               <ProductCard product={sProduct} key={sProduct.id}/>
         ))}
        </div>
    )
}

export default ProductsList