import axios from 'axios';

export default class NewsService {
    _apiBase = 'https://newsapi.org/v2/';
    _apiToken = 'apiKey=cee113bb7c4f4181b294f66734e227cf';

    async getResourse(url){
        console.log(`${this._apiBase}${url}&${this._apiToken}`);
        const res = await fetch(`${this._apiBase}${url}&${this._apiToken}`);
        if(!res.ok){
            console.log('get Error!!!!');
            throw new Error(`Could not fetch ${url}` + ` received ${res.status}`);
        }

        return await res.json();
    }

    async getTopNews(){
        const res = await this.getResourse('top-headlines?country=us');
        return res.articles.map(item => this._transformNews(item));
    }

    _transformNews(item){
        const {publishedAt, url} = item;
        return item = {
            id: publishedAt + url,
            ...item
        }
    }
}