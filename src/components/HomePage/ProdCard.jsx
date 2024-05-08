import React from 'react'
import './style/prodCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'

const ProdCard = ({ prod }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleView = () => {
        navigate(`/product/${prod.id}`)
    }

    const handleBuy = () => {
        dispatch(postCartThunk('/cart', {
            quantity: 1,
            productId: prod.id,
        }))
    }

    return (
        <article className='prodcard' >
            <figure className='prodcard__img' >
                <img src={prod.images[0].url} alt="product img" />
            </figure>
            <ul className='prodcard__list' >
                <li className='prodcard__item' >
                    <span>{prod.brand}</span>
                    <span>{prod.title}</span>
                </li>
                <li className='prodcard__item' >
                    <span>Price</span>
                    <span>${prod.price}</span>
                </li>
            </ul>
            <div className='prodcard__buttons' >
                <button type='button' onClick={handleView}>view details</button>
                <button type='button' onClick={handleBuy}>add to cart</button>
            </div>
        </article>
    )
}

export default ProdCard