import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './style/register.css'

const Register = () => {

    /* firstName lastname email password phone */
    const createUser = useAuth()
    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        createUser(url, data)

        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
        })
    }

    return (
        <div className='register'>
            <form  className='register__form' onSubmit={handleSubmit(submit)} >
                <h2 className='register__title' >Register user</h2>
                <div className='register__form-item' >
                    <label htmlFor="firstName">firstName</label>
                    <input {...register('firstName')} type="text" id='firstName' />
                </div>
                <div className='register__form-item' >
                    <label htmlFor="lastName">lastName</label>
                    <input {...register('lastName')} type="text" id='lastName' />
                </div>
                <div className='register__form-item' >
                    <label htmlFor="email">email</label>
                    <input {...register('email')} type="email" id='email' />
                </div>
                <div className='register__form-item' >
                    <label htmlFor="password">password</label>
                    <input {...register('password')} type="password" id='password' />
                </div>
                <div className='register__form-item' >
                    <label htmlFor="phone">phone</label>
                    <input {...register('phone')} type="text" id='phone' />
                </div>
                <button className='register__btn'>Register</button>
            </form>
        </div>
    )
}

export default Register