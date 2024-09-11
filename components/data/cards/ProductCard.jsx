import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({product}) =>{
    console.log(product)
    return(
        <div>
            <div>Product Card</div>
            <div>
            <Image 
                    src={'https:' + product.fields.thumbnail.fields.file.url}
                    width={product.fields.thumbnail.fields.file.details.image.width}
                    height={product.fields.thumbnail.fields.file.details.image.height}
            />
            </div>
            <div>{product.fields.title}</div>
            <Link href={'/products/' + product.fields.slug }><span>Clique</span></Link>

        </div>
    )
}

export default ProductCard;