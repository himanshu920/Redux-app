import {GET_NEWS_LIST, DELETE_NEWS} from '../actions';

const initialState = {
    newsList: []
}
 const  NewList = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS_LIST:
            return {
                ...state,
                newsList : action.newsData
            }
        case DELETE_NEWS:
            let list = state.newsList.filter(item => item.data.id !== action.id)
            return {
                newsList : list
            }        
        default:
            return state;
    }
}   
export default NewList;
