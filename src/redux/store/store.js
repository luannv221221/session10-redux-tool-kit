import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "../reducres/quantitySlice";


export default configureStore({
    reducer: {
        quantity: quantitySlice
    }
})