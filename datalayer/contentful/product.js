import { client } from "./client";

export const getProducts = async() =>{
    const products = await client.getEntries({content_type: 'product'})
    console.log(products);

    return products.items
}

// Fetch slugs
export const getSlugs = async() =>{
    const rawSlugs = await client.getEntries({
        content_type: 'product',
        select: ['fields.slug']
    })

    const slugs = rawSlugs.items.map((rawSlug) => rawSlug.fields.slug)

    return slugs
}

export const getProductBySlug = async ({slug}) =>{
    const found = await client.getEntries({
        content_type: 'product',
        'fields.slug': slug,
        include: 2
    })

    if(found.items.length == 0) return null
    const product = found.items[0]
    return product
}