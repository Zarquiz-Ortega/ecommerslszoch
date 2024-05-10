import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import ProdCard from '../components/HomePage/ProdCard'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCategori from '../components/HomePage/FilterCategori'
import './style/homePage.css'

const body = document.querySelector('body')

const HomePage = () => {

    const [products, getProducts, isLoading] = useFetch()
    const [prodName, setProdName] = useState('')
    const [prodPrice, setProdPrice] = useState({ from: 0, to: Infinity })
    const [prodCategory, setProdCategory] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isDarck, setIsDarck] = useState(false)

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

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }


    const handleDarck = () => {
        body.classList.toggle('dark')
        if (isDarck) {
            setIsDarck(false)
        } else {
            setIsDarck(true)
        }
    }

    return (
        <div className='homepage'>
            {
                isLoading ?
                    <div className='overlay'>
                        <div class='spinner'></div>
                    </div>
                    :
                    <div>
                        <div className={`homepage__sidebard ${isOpen ? 'open' : ''} ${isDarck ? 'darck' : ''}`}>
                            <div>
                                <button className='sidebar__btn close' onClick={handleClose} >❌</button>
                                <button className='sidebar__btn mode' onClick={handleDarck} >{`${isDarck ? 'Light' : 'Darck'}`} Mode</button>
                            </div>
                            <div className='homepage__sidebard-item'>
                                <p className='sidebard__title' >Prices</p>
                                <FilterPrice setProdPrice={setProdPrice} />
                            </div>
                            <div className='homepage__sidebard-item' >
                                <p className='sidebard__title' >Category</p>
                                <FilterCategori setProdCategory={setProdCategory} />
                            </div>

                        </div>
                        <div className="homepage__filters">
                            <div className='homepage__filtername' >
                                <input ref={textInput} onChange={handleChange} type="text" />
                                <button>🔎</button>
                            </div>
                            <button className='homepage__btnfilters' onClick={handleOpen} > 🛠️ Filters</button>
                        </div>
                        <div className='homepage__container' >
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
            }
        </div>

    )
}

export default HomePage