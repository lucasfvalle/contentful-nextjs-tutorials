import React from "react";
import ProductCard from '../cards/ProductCard'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

const ProductDetails = ({product}) =>{
    console.log('abaixo:')
    console.log(product)
    return(
        <div>
        <div>{product.fields.title}</div>
        <div>{documentToReactComponents(product.fields.description)}</div>
        </div>

    )
}
export default ProductDetails