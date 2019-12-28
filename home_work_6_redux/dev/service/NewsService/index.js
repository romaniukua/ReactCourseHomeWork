import axios from 'axios';

export default class NewsService {
    _apiBase = 'https://newsapi.org/v2/';
    _apiToken = 'apiKey=cee113bb7c4f4181b294f66734e227cf';

    async getResourse(url){
        const res = await axios(`${this._apiBase}${url}&${this._apiToken}`);
        if(res.data.status !== 'ok'){
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`);
        }
        return res;
    }

    async getTopNews(){
        const res = await this.getResourse('top-headlines?country=us');
        return res.data.articles.map(item => this._transformNews(item));
    }

    _transformNews(item){
        const {publishedAt} = item;
        return item = {
            id: publishedAt,
            ...item
        }
    }
}