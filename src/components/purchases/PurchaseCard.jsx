import React from 'react'
import './Style/purchasecard.css'

const PurchaseCard = ({ prod }) => {

    //console.log(prod)

    return (
        <article className='purchasecard' >
            <h3 className='purchasecard__title'>{prod.product?.title}</h3>
            <figure className='purchasecard__img' >
                <img src={prod.product?.images[0].url} alt="product img" />
            </figure>
            <p className='purchasecard__date' >{prod.updatedAt.slice(0,10)}</p>
            <span className='purchasecard__quantity' >{prod.quantity}</span>
            <span className='purchasecard__price' >Total proce: ${prod.product?.price * prod.quantity}</span>
        </article>
    )
}

export default PurchaseCard