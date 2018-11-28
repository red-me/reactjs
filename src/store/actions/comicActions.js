import axios from 'axios';

const API_KEY = '09f7cbb006658d99df8dfe9a2eeeb67c';
const HASH = '9154e1b33768db530f4eaf8d412edecd';
const GATEWAY_URL = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`;

export const searchComics = (keyword) => {
    return(dispatch, getState) => {
        //make async call to the database
        const url = `${GATEWAY_URL}&title=${keyword.keyword}`;
        axios.get(url)
        .then((response) => {
            const comicList = response.data.data;
            dispatch({ type: 'SEARCH_COMICS', comicList });
            return;
        })
        .catch((error) => {
            dispatch({ type: 'SEARCH_ERROR', error });
            return;
        });
    }
}