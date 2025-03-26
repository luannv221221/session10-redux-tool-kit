import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesThunk = createAsyncThunk("getCategories", async () => {
    const urlAPI = "http://localhost:8080/api/v1/admin/categories";
    const response = await axios.get(urlAPI);
    console.log("du lieu ", response);
    return response.data;
})
const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        data: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategoriesThunk.fulfilled, (state, action) => {
                state.loading = false;
                console.log("Fulfilled");
                state.data = action.payload.content;
            })
            .addCase(getCategoriesThunk.rejected, (state, err) => {
                state.loading = false;
                console.log(err);
            })
    }
});
export default categorySlice.reducer;