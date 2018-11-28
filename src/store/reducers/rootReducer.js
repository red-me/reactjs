import comicReducer from './comicReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    comics: comicReducer
});

export default rootReducer;