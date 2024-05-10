import React, { useState } from 'react'
import './style/cartProd.css'
import { useDispatch } from 'react-redux'
import { deleteCartThunk, putCartThunk } from '../../store/slices/cart.slice'

const CartProd = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartThunk('/cart', prod.id))
    }

    const handleLess = () => {
        if (prod.quantity > 1) {
            dispatch(putCartThunk(
                '/cart',
                { quantity: prod.quantity - 1 },
                prod.id
            ))
        }
    }

    const handlePlus = () => {
        dispatch(putCartThunk(
            '/cart',
            { quantity: prod.quantity + 1 },
            prod.id
        ))
    }



    //console.log(prod)

    return (
        <article className='cartprod' >
            <figure className='cartprod__img' >
                <img src={prod.product?.images[0].url} alt="product img" />
            </figure>
            <div className='cartprod__data'>
                <div className='cartprod__data-item'>
                    <h3 className='cartprod__title' >{prod.product?.title}</h3>
                    <div className='cartprod__container' >
                        <button className='cartprod__btn' onClick={handleLess} >-1</button>
                        <span> {prod.quantity} </span>
                        <button className='cartprod__btn' onClick={handlePlus} >+1</button>
                    </div>
                </div>
                <div className='cartprod__data-item'>
                    <button className='cartprod__btn delete' onClick={handleDelete} >Delete</button>
                    <span className='cartprod__price' ><b>Total: </b> ${prod.product?.price * prod.quantity}.00</span>
                </div>
            </div>
        </article>
    )
}

export default CartProd