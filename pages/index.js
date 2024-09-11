import { getProducts } from "../datalayer";
import ProductsList from "../components/data/lists/ProductsList";

export default function Index({products}) {  
  return (
   <ProductsList product={products} />
  );
}

export const getStaticProps = async(ctx) =>{
  const products = await getProducts()

  return{
    props:{
      products
    }
  }
}