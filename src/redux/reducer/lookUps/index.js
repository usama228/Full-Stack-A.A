import { createSlice } from '@reduxjs/toolkit';


const lookUpSlice = createSlice({
    name: 'lookUp',
    initialState: {
        countryLoading: false,
        countrySuccess: true,
        countryFailure: false,
        countryError: null,
        countriesList: [
            {
                "id": 167,
                "name": "Pakistan",
                "phone_code": "92",
                "numeric_code": "586",
                "other_details": {
                    "iso3": "PAK",
                    "iso2": "PK",
                    "capital": "Islamabad",
                    "currency": "PKR",
                    "currency_name": "Pakistani rupee",
                    "currency_symbol": "₨",
                    "tld": ".pk",
                    "native": "پاکستان",
                    "region": "Asia",
                    "region_id": 3,
                    "subregion": "Southern Asia",
                    "subregion_id": 14,
                    "nationality": "Pakistani",
                    "timezones": [
                        {
                            "zoneName": "Asia/Karachi",
                            "gmtOffset": 18000,
                            "gmtOffsetName": "UTC+05:00",
                            "abbreviation": "PKT",
                            "tzName": "Pakistan Standard Time"
                        }
                    ],
                    "translations": {
                        "ko": "파키스탄",
                        "pt-BR": "Paquistão",
                        "pt": "Paquistão",
                        "nl": "Pakistan",
                        "hr": "Pakistan",
                        "fa": "پاکستان",
                        "de": "Pakistan",
                        "es": "Pakistán",
                        "fr": "Pakistan",
                        "ja": "パキスタン",
                        "it": "Pakistan",
                        "zh-CN": "巴基斯坦",
                        "tr": "Pakistan",
                        "ru": "Пакистан",
                        "uk": "Пакистан",
                        "pl": "Pakistan"
                    },
                    "latitude": "30.00000000",
                    "longitude": "70.00000000",
                    "emoji": "🇵🇰",
                    "emojiU": "U+1F1F5 U+1F1F0"
                }
            }
        ],

        stateLoading: false,
        stateSuccess: false,
        stateFailure: false,
        stateError: null,
        statesList: [],

        cityLoading: false,
        citySuccess: false,
        cityFailure: false,
        cityError: null,
        citiesList: [],

    },
    reducers: {
        countryStart: (state) => {
            state.countryLoading = true
            state.countrySuccess = false
            state.countryFailure = false
            state.countryError = null
        },
        countrySuccess: (state, action) => {
            state.countryLoading = false
            state.countrySuccess = true
            state.countryFailure = false
            state.countryError = null
            state.countriesList = action.payload
        },
        countryFailure: (state, action) => {
            state.countryLoading = false
            state.countrySuccess = false
            state.countryFailure = true
            state.countryError = action.payload
        },


        stateStart: (state) => {
            state.stateLoading = true
            state.stateSuccess = false
            state.stateFailure = false
            state.stateError = null
        },
        stateSuccess: (state, action) => {
            state.stateLoading = false
            state.stateSuccess = true
            state.stateFailure = false
            state.stateError = null
            state.statesList = action.payload
        },
        stateFailure: (state, action) => {
            state.stateLoading = false
            state.stateSuccess = false
            state.stateFailure = true
            state.stateError = action.payload
        },

        cityStart: (state) => {
            state.cityLoading = true
            state.citySuccess = false
            state.cityFailure = false
            state.cityError = null
        },
        citySuccess: (state, action) => {
            state.cityLoading = false
            state.citySuccess = true
            state.cityFailure = false
            state.cityError = null
            state.citiesList = action.payload
        },
        cityFailure: (state, action) => {
            state.cityLoading = false
            state.citySuccess = false
            state.cityFailure = true
            state.cityError = action.payload
        },
    },
});

export const {
    countryStart, countrySuccess, countryFailure,
    stateStart, stateSuccess, stateFailure,
    cityStart, citySuccess, cityFailure
} = lookUpSlice.actions;
export default lookUpSlice.reducer;

