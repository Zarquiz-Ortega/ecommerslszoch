import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './style/prodslider.css'

const ProdSlider = ({ product }) => {

    return (
        <Splide
            options={{
                rewind: true,
            }}
            aria-label="Product Images"
        >
            {
                product?.images.map(img => (
                    <SplideSlide key={img.id}>
                        <img src={img.url} alt="Product img" />
                    </SplideSlide>
                ))
            }

        </Splide>
    )
}

export default ProdSlider