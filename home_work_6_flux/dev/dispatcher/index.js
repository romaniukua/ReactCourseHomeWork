import { Dispatcher } from 'flux';
import store from '../store';

const newsDispacher = new Dispatcher();
newsDispacher.register(action => {
    const { type, payload } = action;
    switch(type){
        case 'REMOVE_NEWS': {
            store.removeNews(payload);
            store.emitStore();
            break;
        }
        case 'SHOW_MORE': {
            store.showMore();
            store.emitStore();
            break;
        }
        case 'CREATE_NEWS': {
            store.createNews(payload);
            store.emitStore();
            break;
        }
        case 'UPDATE_NEWS': {
            store.updateNews(payload);
            store.emitStore();
            break;
        }
        case 'ITEM_TO_EDIT': {
            store.findItemToEdit(payload);
            store.emitStore();
            break;
        }
        case 'UNSET_ITEM': {
            store.unsetItem();
            store.emitStore();
            break;
        }
        
    }
});

export default newsDispacher;