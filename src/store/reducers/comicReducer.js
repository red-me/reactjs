const initState = {};

const comicReducer = (state = initState, action) => {
    switch(action.type){
        case 'SEARCH_COMICS':
            return{
                ...state,
                comicList: action.comicList.results
            }
        default:
            return state;
    }
}

export default comicReducer;