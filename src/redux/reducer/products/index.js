import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'product',
    initialState: {
        

        getAllProductsLoading: false,
        getAllProductsSuccess: false,
        getAllProductsFailure: false,
        getAllProductsError: null,
        getAllProducts: { products: [] },

        addProductLoading: false,
        addProductSuccess: false,
        addProductFailure: false,
        addProductError: null,

        deleteProductLoading: false,
        deleteProductSuccess: false,
        deleteProductFailure: false,
        deleteProductError: null,

        updateProductLoading: false,
        updateProductSuccess: false,
        updateProductFailure: false,
        updateProductError: null,

        productLoading: false,
        productSuccess: false,
        productFailure: false,
        productError: null,
        product: null

    },
    reducers: {
       

        allProductsLoading: (state) => {
            state.getAllProductsLoading = true;
            state.getAllProductsSuccess = false;
            state.getAllProductsFailure = false
            state.getAllProductsError = null
        },
        allProductsSuccess: (state, action) => {
            state.getAllProductsLoading = false;
            state.getAllProductsSuccess = true;
            state.getAllProductsFailure = false
            state.getAllProductsError = null
            state.getAllProducts = action.payload
        },
        allProductsFailure: (state, action) => {
            state.getAllProductsLoading = false;
            state.getAllProductsSuccess = false;
            state.getAllProductsFailure = true
            state.getAllProductsError = action.payload
        },

        getProductLoading: (state) => {
            state.productLoading = true;
            state.productSuccess = false;
            state.productFailure = false
            state.productError = null
        },
        getProductSuccess: (state, action) => {
            state.productLoading = false;
            state.productSuccess = true;
            state.productFailure = false
            state.productError = null
            state.product = action.payload
        },
        getProductFailure: (state, action) => {
            state.productLoading = false;
            state.productSuccess = false;
            state.productFailure = true
            state.productError = action.payload
        },

        addProductLoading: (state) => {
            state.addProductLoading = true;
            state.addProductSuccess = false;
            state.addProductFailure = false
            state.addProductError = null
        },
        addProductSuccess: (state, action) => {
            state.addProductLoading = false;
            state.addProductSuccess = true;
            state.addProductFailure = false
            state.addProductError = null
        },
        addProductFailure: (state, action) => {
            state.addProductLoading = false;
            state.addProductSuccess = false;
            state.addProductFailure = true
            state.addProductError = action.payload
        },

        updateProductLoading: (state) => {
            state.updateProductLoading = true;
            state.updateProductSuccess = false;
            state.updateProductFailure = false
            state.updateProductError = null
        },
        updateProductSuccess: (state, action) => {
            state.updateProductLoading = false;
            state.updateProductSuccess = true;
            state.updateProductFailure = false
            state.updateProductError = null
        },
        updateProductFailure: (state, action) => {
            state.updateProductLoading = false;
            state.updateProductSuccess = false;
            state.updateProductFailure = true
            state.updateProductError = action.payload
        },

        removeProductLoading: (state) => {
            state.deleteProductLoading = true;
            state.deleteProductSuccess = false;
            state.deleteProductFailure = false
            state.deleteProductError = null
        },
        removeProductSuccess: (state, action) => {
            state.deleteProductLoading = false;
            state.deleteProductSuccess = true;
            state.deleteProductFailure = false
            state.deleteProductError = null
        },
        removeProductFailure: (state, action) => {
            state.deleteProductLoading = false;
            state.deleteProductSuccess = false;
            state.deleteProductFailure = true
            state.deleteProductError = action.payload
        },
    },
});

export const { 
    allProductsLoading, allProductsSuccess, allProductsFailure,
    removeProductLoading, removeProductSuccess, removeProductFailure,
    updateProductLoading, updateProductSuccess, updateProductFailure,
    addProductLoading, addProductSuccess, addProductFailure,
    getProductLoading, getProductSuccess, getProductFailure,
} = productSlice.actions;
export default productSlice.reducer;

