import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducer/user';
import lookUpReducer from '../reducer/lookUps';
import productReducer from '../reducer/products';
import projectReducer from '../reducer/projects';
import categoryReducer from '../reducer/categories';
export const store = configureStore({
    reducer: {
        user: userReducer,
        lookUp: lookUpReducer,
        product: productReducer,
        project: projectReducer,
        category: categoryReducer
    },
});

