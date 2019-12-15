import dispatcher from '../dispatcher';

export const removeNews = (id) => {
    dispatcher.dispatch({
        type: 'REMOVE_NEWS',
        payload: id
    });
}

export const createNews = (news) => {
    dispatcher.dispatch({
        type: 'CREATE_NEWS',
        payload: news
    });
}

export const updateNews = (news) => {
    dispatcher.dispatch({
        type: 'UPDATE_NEWS',
        payload: news
    });
}

export const showMore = () => {
    dispatcher.dispatch({
        type: 'SHOW_MORE',
    });
}

export const findItemToEdit = (id) => {
    dispatcher.dispatch({
        type: 'ITEM_TO_EDIT',
        payload: id,
    });
}

export const unsetItem = () => {
    dispatcher.dispatch({
        type: 'UNSET_ITEM',
    });
}