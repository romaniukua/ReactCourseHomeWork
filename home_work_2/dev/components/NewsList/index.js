import React from 'react';
import NewsItem from '../NewsItem';

const NewsList = ({articles, newsCounter}) => {

    const elements = articles.map((item, index) => {
        return (
            index + 1 <= newsCounter ? <NewsItem key={item.url} {...item} /> : null
        )
    });

    return (
        <div className="news-list d-flex flex-wrap justify-content-between align-items-start align-content-start">
            {elements}
        </div>
    )
}

export default NewsList;