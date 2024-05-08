import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.slice";
import purchasesSlice from "./slices/purchases.slice";


const store = configureStore({

    reducer:{
        //slices
        cartSlice,
        purchasesSlice,
    }

})

export default store