import React, { useState, useEffect } from 'react';
import NewsService from '../../service/NewsService';
import Header from '../Header';
import NewsList from '../NewsList';
import Modal from '../Modal';

const App = () => {
    const [articles, changeArticles] = useState([]);
    const [counterToShow, changeCounterToShow] = useState(4);

    useEffect(() => {
        const service = new NewsService();
        service.getTopNews().then(articles => {
            const savedNews = localStorage['savedNews'] ? JSON.parse(localStorage['savedNews']) : [];
            changeArticles([
                ...savedNews,
                ...articles
            ]);
        });
    });

    const createNews = (item) => {
        localStorage.setItem('savedNews', JSON.stringify(
            [item, ...articles.filter(item => item.id)])
        );
        changeArticles([
            item,
            ...articles
        ]);
    };

    return (
        <div className="container d-flex flex-column bg-white">
            <Header />
            <button className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Add news</button>
            <NewsList articles={articles} newsCounter={counterToShow} />
            <button className='btn btn-link' onClick={() => changeCounterToShow(counterToShow + 2)}>Show more</button>
            <Modal addNews={createNews} />
        </div>
    );

}

export default App;