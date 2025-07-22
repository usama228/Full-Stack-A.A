
import { AlertToast } from "@/assets";
import { getAllProducts, addProduct, updateProduct, getProduct, removeProduct } from "@/redux/api";
import {
    allProductsLoading, allProductsSuccess, allProductsFailure,
    removeProductLoading, removeProductSuccess, removeProductFailure,
    updateProductLoading, updateProductSuccess, updateProductFailure,
    addProductLoading, addProductSuccess, addProductFailure,
    getProductLoading, getProductSuccess, getProductFailure,
} from "@/redux/reducer";
import { ALERT_TYPES } from "../../../../config";


export const GetAllProducts = (productBody, moveToNext) => {
    return dispatch => {
        dispatch(allProductsLoading())
        getAllProducts(productBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(allProductsSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(allProductsFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(allProductsFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const AddProduct = (productBody, moveToNext) => {
    return dispatch => {
        dispatch(addProductLoading())
        addProduct(productBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(addProductSuccess(
                        response.data.data
                    ));

                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addProductFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(addProductFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const UpdateProduct = (productBody, moveToNext) => {
    return dispatch => {
        dispatch(updateProductLoading())
        updateProduct(productBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(updateProductSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(updateProductFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(updateProductFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const GetProduct = (productId, moveToNext) => {
    return dispatch => {
        dispatch(getProductLoading())
        getProduct(productId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(getProductSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(getProductFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(getProductFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const RemoveProduct = (productId, moveToNext) => {
    return dispatch => {
        dispatch(removeProductLoading())
        removeProduct(productId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(removeProductSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(removeProductFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(removeProductFailure(error?.message || 'Login failed'));
            }
        )
    }
};