import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import getToken from "../../utils/getToken";

const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1'


const cart = createSlice({

    name: 'cart',
    initialState: null,
    reducers: {
        setCart: (_value, action) => action.payload,
        addCart: (value, action) => value.push(action.payload),
        delCart: (value, action) => value.filter(
            prod => prod.id !== action.payload
        ),
        updateCart: (value, action) => value.map(
            prod => prod.id === action.payload.id ? action.payload.data : prod),
    }
})

export const { setCart, addCart, delCart, updateCart } = cart.actions

export default cart.reducer

export const getCartThunk = (path) => (dispatch) => {
    const url = `${urlBase}${path}`
    axios.get(url, getToken())
        .then(res => dispatch(setCart(res.data)))
        .catch(err => console.log(err))
}

export const postCartThunk = (path, data) => (dispatch) => {
    const url = `${urlBase}${path}`

    axios.post(url, data, getToken())
        .then(res => dispatch(addCart(res.data)))
        .catch(err => console.log(err))
}

export const deleteCartThunk = (path, id) => (dispatch) => {
    const url = `${urlBase}${path}/${id}`
    axios.delete(url, getToken())
        .then(() => {
            dispatch(delCart(id))
            console.log('Delete success')
        })
        .catch(err => console.log(err))
}


export const putCartThunk = (path, id, data) => (dispatch) => {
    const url = `${urlBase}${path}/${id}`
    axios.put(url, data, getToken())
        .then(res => dispatch(updateCart(id, res.data)))
        .catch(err => console.log(err))
}