import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProdCard from '../HomePage/ProdCard'
import './style/prodsimilar.css'

const ProdSimilar = ({ product }) => {

    const [semeProducts, setSemeProducts] = useFetch()

    useEffect(() => {
        if (product) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product.categoryId}`
            setSemeProducts(url)
        }
    }, [])

    console.log(semeProducts)

    return (
        <article className='prodsimilar'>
            <h2 className='prodsimilar__title' >Discover similar items</h2>
            <div className='prodsimilar__data'>
                {
                    semeProducts?.map(prod => (
                        <ProdCard 
                        key={prod.id}
                        prod={prod}
                        />
                    ))
                }
            </div>
        </article>
    )
}

export default ProdSimilar