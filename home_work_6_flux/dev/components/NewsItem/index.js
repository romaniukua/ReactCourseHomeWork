import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import { removeNews, findItemToEdit } from '../../actions';
import styles from './style.scss';

const NewsItem = (props) => {
    const {id, title, description, url, urlToImage} = props;
    return (
        <div className={`news-item card ${styles.card}`}>
            <img className="card-img-top" src={urlToImage} alt="Card image cap"/>
            <div className="card-body">
                <div className={styles.wrapper}>
                    <Button theme='small' data-toggle="modal" data-target="#exampleModal" handleClick = {() => findItemToEdit(id)}>
                        <Icon name='edit'/>
                    </Button>
                    <Button theme='small' handleClick = {() => {removeNews(id)}}>
                        <Icon name='delete'/>
                    </Button>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Button type='anchor' href={url} theme='primary'>Go somewhere</Button>
            </div>
        </div>
    );
}

export default NewsItem;