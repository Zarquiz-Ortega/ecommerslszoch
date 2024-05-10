import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './style/fitercategory.css'

const FilterCategori = ({setProdCategory}) => {

    const [categorys, getCategorys] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getCategorys(url)
    }, [])

    const selectOption = useRef()

    const handleChange = () => {
        setProdCategory(selectOption.current.value)
    }

    return (
        <select className='fitercategori' ref={selectOption} onChange={handleChange} >
            <option className='fitercategori__item'  value=""> All products </option>
            {
                categorys?.map( cat => (
                    <option value={cat.id} key={cat.id} > {cat.name} </option>
                ))
            }
        </select>
    )
}

export default FilterCategori