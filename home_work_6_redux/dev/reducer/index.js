const defaultStore = {
    articles: [],
    counterToShow: 4,
    itemToEdit: null,
};

const reducer = (store = defaultStore, {type, payload}) => {
    switch(type){
        case 'REMOVE_NEWS': {
            store.articles = store.articles.filter(item => item.id !== payload);
            return {
                ...store
            };
        }
        case 'SHOW_MORE': {
            store.counterToShow+=2;
            return {
                ...store,
            };
        }
        case 'CREATE_NEWS': {
            store.articles = [payload, ...store.articles];
            return {
                ...store
            };
        }
        case 'NEWS_FETCH_DATA_SUCCESS': {
            store.articles = payload;
            return {
                ...store
            };
        }
        case 'UPDATE_NEWS': {
            store.articles = store.articles.map(item => item.id === payload.id ? payload : item);
            return {
                ...store
            };
        }
        case 'ITEM_TO_EDIT': {
            store.itemToEdit = store.articles.findIndex(item => item.id === payload);
            return {
                ...store
            };
        }
        case 'UNSET_ITEM': {
            store.itemToEdit = null;
            return {
                ...store,
            };
        }
        default: {
            return store;
        }
    }
}



export default reducer;