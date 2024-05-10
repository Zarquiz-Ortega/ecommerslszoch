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
            <div className='purchasecard__data'>
                <p className='purchasecard__date'><b>Date</b> <br />{prod.updatedAt.slice(0, 10)}</p>
                <span className='purchasecard__quantity' ><b>Quantity</b><br /> {prod.quantity}</span>
            </div>
            <span className='purchasecard__price' ><b>Total proce:</b> ${prod.product?.price * prod.quantity}</span>
        </article>
    )
}

export default PurchaseCard