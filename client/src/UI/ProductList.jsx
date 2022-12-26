import React from 'react'
import ProductCart from './ProductCard.jsx'

const ProductList = ({ data }) => {
    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <ProductCart item={item} index={index} key={index} />
                    )
                })
            }
        </>
    )
}

export default ProductList