export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const DELETE_NEWS = 'DELETE_NEWS';


export const  getNewsList = () => {
    return {
        type : 'GET_NEWS_LIST',
    }
}


export const  deleteNews = (id) => {
    return {
        type : 'DELETE_NEWS',
        id   : id
    }
}