import React from 'react'
import { useForm } from 'react-hook-form'
import './style/filterprices.css'

const FilterPrice = ({ setProdPrice }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        setProdPrice({
            form: data.form || 0,
            to: data.to || Infinity,
        })
        reset({
            form: '',
            to: '',
        })
        
    }

    return (
        <form className='filterprice' onSubmit={handleSubmit(submit)} >
            <div className='filterprice__item' >
                <label htmlFor="form">Form</label>
                <input {...register('form')} id='form' type="text" />
            </div>
            <div className='filterprice__item' >
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="text" />
            </div>
            <button className='filterprice__btn'> Filter price </button>
        </form>
    )
}

export default FilterPrice