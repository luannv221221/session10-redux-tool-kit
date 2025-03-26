import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "../reducres/quantitySlice";
import categorySlice from "../reducres/categorySlice";


export default configureStore({
    reducer: {
        quantity: quantitySlice,
        categories: categorySlice
    }
})