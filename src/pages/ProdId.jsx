import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProdInfo from '../components/ProdId/ProdInfo'
import './style/prodid.css'
import ProdSlider from '../components/ProdId/ProdSlider'

const ProdId = () => {

    const [product, getProduct] = useFetch()

    const params = useParams()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`
        getProduct(url)
    }, [])

    return (
        <section className='prodid' >
            <ProdSlider product={product} />
            <ProdInfo product={product} />
        </section>
    )
}

export default ProdId