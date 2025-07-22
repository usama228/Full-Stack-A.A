import { createSlice } from '@reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {


        getAllCategoriesLoading: false,
        getAllCategoriesSuccess: false,
        getAllCategoriesFailure: false,
        getAllCategoriesError: null,
        getAllCategories: { category: [] },

        getAllChildCategoriesLoading: false,
        getAllChildCategoriesSuccess: false,
        getAllChildCategoriesFailure: false,
        getAllChildCategoriesError: null,
        getAllChildCategories: { category: [] },

        addCategoryLoading: false,
        addCategorySuccess: false,
        addCategoryFailure: false,
        addCategoryError: null,

        deleteCategoryLoading: false,
        deleteCategorySuccess: false,
        deleteCategoryFailure: false,
        deleteCategoryError: null,

        updateCategoryLoading: false,
        updateCategorySuccess: false,
        updateCategoryFailure: false,
        updateCategoryError: null,

        categoryLoading: false,
        categorySuccess: false,
        categoryFailure: false,
        categoryError: null,
        category: null

    },
    reducers: {


        allCategoriesLoading: (state) => {
            state.getAllCategoriesLoading = true;
            state.getAllCategoriesSuccess = false;
            state.getAllCategoriesFailure = false
            state.getAllCategoriesError = null
        },
        allCategoriesSuccess: (state, action) => {
            state.getAllCategoriesLoading = false;
            state.getAllCategoriesSuccess = true;
            state.getAllCategoriesFailure = false
            state.getAllCategoriesError = null
            state.getAllCategories = action.payload
        },
        allCategoriesFailure: (state, action) => {
            state.getAllCategoriesLoading = false;
            state.getAllCategoriesSuccess = false;
            state.getAllCategoriesFailure = true
            state.getAllCategoriesError = action.payload
        },
        allChildCategoriesLoading: (state) => {
            state.getAllChildCategoriesLoading = true;
            state.getAllChildCategoriesSuccess = false;
            state.getAllChildCategoriesFailure = false
            state.getAllChildCategoriesError = null
        },
        allChildCategoriesSuccess: (state, action) => {
            state.getAllChildCategoriesLoading = false;
            state.getAllChildCategoriesSuccess = true;
            state.getAllChildCategoriesFailure = false
            state.getAllChildCategoriesError = null
            state.getAllChildCategories = action.payload
        },
        allChildCategoriesFailure: (state, action) => {
            state.getAllChildCategoriesLoading = false;
            state.getAllChildCategoriesSuccess = false;
            state.getAllChildCategoriesFailure = true
            state.getAllChildCategoriesError = action.payload
        },



        getCategoryLoading: (state) => {
            state.categoryLoading = true;
            state.categorySuccess = false;
            state.categoryFailure = false
            state.categoryError = null
        },
        getCategorySuccess: (state, action) => {
            state.categoryLoading = false;
            state.categorySuccess = true;
            state.categoryFailure = false
            state.categoryError = null
            state.category = action.payload
        },
        getCategoryFailure: (state, action) => {
            state.categoryLoading = false;
            state.categorySuccess = false;
            state.categoryFailure = true
            state.categoryError = action.payload
        },

        addCategoryLoading: (state) => {
            state.addCategoryLoading = true;
            state.addCategorySuccess = false;
            state.addCategoryFailure = false
            state.addCategoryError = null
        },
        addCategorySuccess: (state, action) => {
            state.addCategoryLoading = false;
            state.addCategorySuccess = true;
            state.addCategoryFailure = false
            state.addCategoryError = null
        },
        addCategoryFailure: (state, action) => {
            state.addCategoryLoading = false;
            state.addCategorySuccess = false;
            state.addCategoryFailure = true
            state.addCategoryError = action.payload
        },

        updateCategoryLoading: (state) => {
            state.updateCategoryLoading = true;
            state.updateCategorySuccess = false;
            state.updateCategoryFailure = false
            state.updateCategoryError = null
        },
        updateCategorySuccess: (state, action) => {
            state.updateCategoryLoading = false;
            state.updateCategorySuccess = true;
            state.updateCategoryFailure = false
            state.updateCategoryError = null
        },
        updateCategoryFailure: (state, action) => {
            state.updateCategoryLoading = false;
            state.updateCategorySuccess = false;
            state.updateCategoryFailure = true
            state.updateCategoryError = action.payload
        },

        removeCategoryLoading: (state) => {
            state.deleteCategoryLoading = true;
            state.deleteCategorySuccess = false;
            state.deleteCategoryFailure = false
            state.deleteCategoryError = null
        },
        removeCategorySuccess: (state, action) => {
            state.deleteCategoryLoading = false;
            state.deleteCategorySuccess = true;
            state.deleteCategoryFailure = false
            state.deleteCategoryError = null
        },
        removeCategoryFailure: (state, action) => {
            state.deleteCategoryLoading = false;
            state.deleteCategorySuccess = false;
            state.deleteCategoryFailure = true
            state.deleteCategoryError = action.payload
        },
    },
});

export const {
    allCategoriesLoading, allCategoriesSuccess, allCategoriesFailure,
    allChildCategoriesLoading, allChildCategoriesSuccess, allChildCategoriesFailure,
    removeCategoryLoading, removeCategorySuccess, removeCategoryFailure,
    updateCategoryLoading, updateCategorySuccess, updateCategoryFailure,
    addCategoryLoading, addCategorySuccess, addCategoryFailure,
    getCategoryLoading, getCategorySuccess, getCategoryFailure,
} = categoriesSlice.actions
export default categoriesSlice.reducer;

