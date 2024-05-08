import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import PurchaseCard from '../components/purchases/PurchaseCard'
import './style/purchases.css'

const Purchases = () => {

    const purchases = useSelector(store => store.purchasesSlice)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    //console.log(purchases)

    return (
        <div className='purchases' >
            {
                purchases.map(prod => (
                    <PurchaseCard key={prod.id} prod={prod} />
                ))
            }
        </div>
    )
}

export default Purchases