import React from 'react'
import { useForm } from 'react-hook-form'

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
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <label htmlFor="form">Form</label>
                <input {...register('form')} id='form' type="text" />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="text" />
            </div>
            <button> filter price </button>
        </form>
    )
}

export default FilterPrice