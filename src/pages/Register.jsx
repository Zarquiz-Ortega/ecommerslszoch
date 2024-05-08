import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

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
        <div>
            <form onSubmit={handleSubmit(submit)} >
                <div>
                    <label htmlFor="firstName">firstName</label>
                    <input {...register('firstName')} type="text" id='firstName' />
                </div>
                <div>
                    <label htmlFor="lastName">lastName</label>
                    <input {...register('lastName')} type="text" id='lastName' />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input {...register('email')} type="email" id='email' />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input {...register('password')} type="password" id='password' />
                </div>
                <div>
                    <label htmlFor="phone">phone</label>
                    <input {...register('phone')} type="text" id='phone' />
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register