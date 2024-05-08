import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {

    const [hasToken, setHasToken] = useState()

    const loginUser = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        setHasToken(localStorage.getItem('token'))
    }, [])

    const { register, handleSubmit, reset } = useForm()

    const submit = async(data) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        await loginUser(url, data)

        reset({
            email: '',
            password: '',
        })
        setHasToken(localStorage.getItem('token'))
        setTimeout(() => {
            navigate('/cart')
        }, 2000);
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setHasToken()
    }

    return (
        <>
            {
                hasToken?
                    <button onClick={handleLogout} >Logout</button>
                    :
                    <div>
                        <form onSubmit={handleSubmit(submit)} >
                            <div>
                                <label htmlFor="email">Email</label>
                                <input {...register('email')} type="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input {...register('password')} type="password" id="password" />
                            </div>
                            <button>Login</button>
                        </form>
                        <p>if you not registered yet <Link to={'/register'}>Register</Link></p>
                    </div>
            }
        </>
    )
}

export default Login