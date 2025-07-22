import { getCountries, getCountryStates, getStateCities } from "@/redux/api";
import {
    countryStart, countrySuccess, countryFailure,
    stateStart, stateSuccess, stateFailure,
    cityStart, citySuccess, cityFailure
} from "@/redux/reducer";



export const GetCountries = () => {
    return dispatch => {
        dispatch(countryStart())
        getCountries().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(countrySuccess(response.data.data));
                }
                else {
                    dispatch(countryFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(countryFailure(error?.message || 'Login failed'));
            }
        )
    }
};

export const GetCountryStates = (countryId) => {
    return dispatch => {
        dispatch(stateStart())
        getCountryStates(countryId).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(stateSuccess(
                        response.data.data
                    ));

                }
                else {
                    dispatch(stateFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(stateFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const GetStateCities = (data, moveToNext, city) => {
    return dispatch => {
        dispatch(cityStart())
        getStateCities(data).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(citySuccess(
                        response.data.data
                    ));
                    if (moveToNext) {
                        moveToNext(city, response.data.data || [])
                    }
                }
                else {
                    dispatch(cityFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(cityFailure(error?.message || 'Login failed'));
            }
        )
    }
};