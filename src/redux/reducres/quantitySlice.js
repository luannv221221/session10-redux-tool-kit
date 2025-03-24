import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
    name: "quantitySlice",
    initialState: {
        value: 10
    },
    reducers: {
        increaseQty: state => {
            state.value += 1;
        },
        decreaseQty: state => {
            state.value -= 1;
        }
    }
})
export const { increaseQty, decreaseQty } = quantitySlice.actions;
export default quantitySlice.reducer;