import React, { useState } from 'react'
import './style/cartProd.css'
import { useDispatch } from 'react-redux'
import { deleteCartThunk, putCartThunk } from '../../store/slices/cart.slice'

const CartProd = ({ prod }) => {

    const [counter, setCounter] = useState(prod.quantity)

    const dispatch = useDispatch()

    const handlePlus = () => {
        setCounter(counter + 1)
        dispatch(putCartThunk('/cart', prod.id, { quantity: counter }))
    }

    const handleLess = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            dispatch(putCartThunk('/cart', prod.id, { quantity: counter }))
        }
    }

    const handleDelete = () => {
        dispatch(deleteCartThunk('/cart', prod.id))
    }

    console.log(prod)

    return (
        <article className='cartprod' >
            <h3 className='cartprod__title' >{prod.product?.title}</h3>
            <figure className='cartprod__img' >
                <img src={prod.product?.images[0].url} alt="product img" />
            </figure>
            <div className='cartprod__container' >
                <button onClick={handleLess} >-1</button>
                <span> {prod.quantity} </span>
                <button onClick={handlePlus} >+1</button>
            </div>
            <button onClick={handleDelete} >Delete</button>
            <span className='cartprod__price' ><b>Total: $</b> {prod.product?.price * prod.quantity}</span>
        </article>
    )
}

export default CartProd