import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './style/login.css'

const Login = () => {

    const [hasToken, setHasToken] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const loginUser = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        setHasToken(localStorage.getItem('token'))
        setIsLoading(false)
    }, [])

    const { register, handleSubmit, reset } = useForm()

    const submit = async (data) => {
        setIsLoading(true)
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        await loginUser(url, data)
        reset({
            email: '',
            password: '',
        })
        setHasToken(localStorage.getItem('token'))
        setTimeout(() => {
            setIsLoading(false)
            navigate('/cart')
        }, 2000);
    }

    const handleLogout = () => {
        setIsLoading(true)
        localStorage.removeItem('token')
        setHasToken()
        setIsLoading(false)
    }


    return (
        <div className='login'>
            {
                isLoading ?
                    <div className='overlay'>
                        <div class='spinner'></div>
                    </div>
                    :
                    hasToken ?
                        <div className='login__card'>
                            <h2 className='login__title'>Logout</h2>
                            <button className='login__btn' onClick={handleLogout} >Logout</button>
                        </div>
                        :
                        <div className='login__card'>
                            <h2 className='login__title' >Login</h2>
                            <form className='login__form' onSubmit={handleSubmit(submit)} >
                                <div className='login__form-item'>
                                    <label htmlFor="email">Email</label>
                                    <input {...register('email')} type="email" id="email" />
                                </div>
                                <div className='login__form-item'>
                                    <label htmlFor="password">Password</label>
                                    <input {...register('password')} type="password" id="password" />
                                </div>
                                <button className='login__btn'>Login</button>
                            </form>
                            <p className='login__footer'>if you not registered yet <Link to={'/register'}>Register</Link></p>
                        </div>
            }
        </div>
    )


}

export default Login