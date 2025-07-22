import { AlertToast } from "@/assets";
import { getAllCategories, getAllChildCategories, addCategory, updateCategory, getCategory, removeCategory } from "@/redux/api";
import {
    allCategoriesLoading, allCategoriesSuccess, allCategoriesFailure,
    allChildCategoriesLoading, allChildCategoriesSuccess, allChildCategoriesFailure,
    removeCategoryLoading, removeCategorySuccess, removeCategoryFailure,
    updateCategoryLoading, updateCategorySuccess, updateCategoryFailure,
    addCategoryLoading, addCategorySuccess, addCategoryFailure,
    getCategoryLoading, getCategorySuccess, getCategoryFailure,
} from "@/redux/reducer";
import { ALERT_TYPES } from "../../../../config";





export const GetAllCategories = (categoryBody,moveToNext) => {
    return dispatch => {
        dispatch(allCategoriesLoading())
        getAllCategories(categoryBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(allCategoriesSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(allCategoriesFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(allCategoriesFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const GetAllChildCategories = (categoryId,categoryBody, moveToNext) => {
    return dispatch => {
        dispatch(allChildCategoriesLoading())
        getAllChildCategories(categoryId,categoryBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(allChildCategoriesSuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(allChildCategoriesFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(allChildCategoriesFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const AddCategory = (categoryBody, moveToNext) => {
    return dispatch => {
        dispatch(addCategoryLoading())
        addCategory(categoryBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(addCategorySuccess(
                        response.data.data
                    ));

                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addCategoryFailure(response?.data?.message || 'Login failed'));
                    AlertToast(ALERT_TYPES.ERROR, response?.data?.message || 'Failed')
                }
            }, error => {
                dispatch(addCategoryFailure(error?.message || 'Login failed'));
                AlertToast(ALERT_TYPES.ERROR, error?.message || 'Failed')
            }
        )
    }
};
export const UpdateCategory = (categoryBody, moveToNext) => {
    return dispatch => {
        dispatch(updateCategoryLoading())
        updateCategory(categoryBody).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(updateCategorySuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext(response.data.data)
                    }
                }
                else {
                    dispatch(updateCategoryFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(updateCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const GetCategory = (categoryId, moveToNext) => {
    return dispatch => {
        dispatch(getCategoryLoading())
        getCategory(categoryId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(getCategorySuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(getCategoryFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(getCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const RemoveCategory = (categoryId, moveToNext) => {
    return dispatch => {
        dispatch(removeCategoryLoading())
        removeCategory(categoryId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(removeCategorySuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(removeCategoryFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(removeCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};