import Axios from 'axios';
import {tokenPriceUrl} from "../constants/url";

import {
    TOKEN_PRICE_FETCH_ERROR,
    TOKEN_PRICE_FETCH_SUCCESS,
} from "../constants/tokenPrice"

export const fetchTokenPriceSuccess = (data) => {
    return {
        type: TOKEN_PRICE_FETCH_SUCCESS,
        data,
    };
};
export const fetchTokenPriceError = (data) => {
    return {
        type: TOKEN_PRICE_FETCH_ERROR,
        data,
    };
};

export const fetchTokenPrice = () => (dispatch) => {
    const url = tokenPriceUrl();
     Axios.get(url)
        .then((res) => {
            if (res.data.close) {
                dispatch(fetchTokenPriceSuccess());
            }
        })
        .catch((error) => {
            dispatch(fetchTokenPriceError(error.response
                ? error.response.data.message
                : error.message));
        });
};
