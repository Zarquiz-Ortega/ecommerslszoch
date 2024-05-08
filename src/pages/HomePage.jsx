import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import ProdCard from '../components/HomePage/ProdCard'
import './style/homePage.css'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCategori from '../components/HomePage/FilterCategori'

const body = document.querySelector('body')

const HomePage = () => {

    const [products, getProducts] = useFetch()
    const [prodName, setProdName] = useState('')
    const [prodPrice, setProdPrice] = useState({ from: 0, to: Infinity })
    const [prodCategory, setProdCategory] = useState('')

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
        getProducts(url)
    }, [])

    const textInput = useRef()

    const handleChange = () => {
        setProdName(textInput.current.value.toLowerCase().trim())
    }

    const prodFilters = (prod) => {
        const porName = prod.title.toLowerCase().includes(prodName)
        const porPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from
        const porCategory = prodCategory ? prod.categoryId === +prodCategory : prod

        return porName && porPrice && porCategory
    }

    const handleDarck = () => {
        body.classList.toggle('dark')
    } 

    return (
        <div className='homepage' >
            <div className="homepage__filters">
                <input ref={textInput} onChange={handleChange} type="text" />
                <FilterPrice setProdPrice={setProdPrice} />
                <FilterCategori setProdCategory={setProdCategory} />
                <button onClick={handleDarck} >Dark Mode</button>
            </div>
            <div className='hoempage__container' >
                {
                    products?.filter(prodFilters).map((prod) => (
                        <ProdCard
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage