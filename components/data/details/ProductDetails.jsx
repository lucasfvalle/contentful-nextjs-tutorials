import React from "react";
import ProductCard from '../cards/ProductCard'

const ProductDetails = ({product}) =>{
    console.log('abaixo:')
    console.log(product)
    return(

        <div>{product.fields.title}</div>
    )
}
export default ProductDetails