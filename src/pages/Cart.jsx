import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slice'
import CartProd from '../components/Cart/CartProd'
import './style/cart.css'
import { postPurchasesThunk } from '../store/slices/purchases.slice'

const Cart = () => {

    const cart = useSelector(store => store.cartSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartThunk('/cart'))
    }, [])

    const handleBuy = () => {
        dispatch(postPurchasesThunk(''))
        dispatch(setCart([]))
    }

    return (
        <div className='container'>
            <div className='cart' >
                {
                    cart?.map(prod => (
                        <CartProd key={prod.id} prod={prod} />
                    ))
                }
            </div>
            <div className='cart__totals' >
                <h3>Total Products: {cart?.reduce((ca, pr) => {
                    return ca + pr.quantity
                }, 0)}</h3>
                <h3>Total Prices: ${cart?.reduce((ca, pr) => {
                    return ca + pr.quantity * pr.product?.price
                },
                    0)}.00</h3>
                <button  className='cart__btn' onClick={handleBuy} >buy</button>
            </div>
        </div>

    )
}

export default Cart