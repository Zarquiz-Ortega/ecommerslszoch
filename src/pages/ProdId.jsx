import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProdInfo from '../components/ProdId/ProdInfo'
import './style/prodid.css'
import ProdSlider from '../components/ProdId/ProdSlider'
import ProdSimilar from '../components/ProdId/ProdSimilar'

const ProdId = () => {

    const [product, getProduct, isLoading] = useFetch()

    const params = useParams()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`
        getProduct(url)
    }, [])

    return (
        <section className='prodid' >
            {
                isLoading ?
                    <div className='overlay'>
                        <div class='spinner'></div>
                    </div>
                    :
                    <>
                        <div className='prodid__data'>
                            <ProdSlider product={product} />
                            <ProdInfo product={product} />
                        </div>
                        <ProdSimilar product={product} />
                    </>
            }
        </section>
    )
}

export default ProdId