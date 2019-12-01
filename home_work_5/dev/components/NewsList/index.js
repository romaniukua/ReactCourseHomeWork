import React from 'react';
import NewsItem from '../NewsItem';
import styles from './style.scss';

const NewsList = ({articles, newsCounter, onDeleted, onEdit}) => {
    const elements = articles.map((item, index) => {
        const {id, url} = item;
        return (
            index + 1 <= newsCounter ? <NewsItem key={id ? id : url} onDeleted = {() => {onDeleted(id)}} onEdit = {() => {onEdit(id)}} {...item} /> : null
        )
    });

    return (
        <div className={`${styles['news-list']} d-flex flex-wrap justify-content-between align-items-start align-content-start`}>
            {elements}
        </div>
    )
}

export default NewsList;