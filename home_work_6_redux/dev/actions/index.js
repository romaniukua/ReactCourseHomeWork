import NewsService from '../service/NewsService';

export const newsFetchDataSuccess = news => ({
    type: 'NEWS_FETCH_DATA_SUCCESS',
    payload: news
})

export const newsFetchData = () => {
    return (dispatch) => {
        const service = new NewsService();
        service.getTopNews().then(news => dispatch(newsFetchDataSuccess(news)));
    }
}

export const removeNews = id => ({
    type: 'REMOVE_NEWS',
    payload: id,
});


export const createNews = news => ({
    type: 'CREATE_NEWS',
    payload: news,
});


export const updateNews = news => ({
    type: 'UPDATE_NEWS',
    payload: news,
});


export const showMore = () => ({
    type: 'SHOW_MORE',
});


export const findItemToEdit = id => ({
    type: 'ITEM_TO_EDIT',
    payload: id,
});


export const unsetItem = () => ({
    type: 'UNSET_ITEM',
});
