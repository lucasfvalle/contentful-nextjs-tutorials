import { client } from "./client";

export const getProducts = async() =>{
    const products = await client.getEntries({content_type: 'product'})
    console.log(products);

    return products.items
}