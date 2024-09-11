import React from "react";
import ProductDetails from "../../components/data/details/ProductDetails"
import { getProducts } from "../../datalayer/contentful/product";
import { getSlugs } from "../../datalayer/contentful/product";
import { getProductBySlug } from "../../datalayer/contentful/product";

const ProductDetailsPage = ({product}) =>{
    return(
        <ProductDetails product={product}/>
    )

}
export default ProductDetailsPage;

export const getStaticPaths = async () =>{
    const slugs = await getSlugs();
    const paths = slugs.map((slug) => ({params: {slug}}))

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (params) =>{
    const slug = params.slug
    const product = await getProductBySlug({slug});


    return{
        props:{
            product
        }
    }
}