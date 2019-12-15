import React, { Component } from 'react';
import NewsItem from '../NewsItem';
import Modal from '../Modal';
import Button from '../Button';

import store from '../../store';
import { showMore } from '../../actions';
import styles from './style.scss';

class NewsList extends Component {
    state = {
        ...store.getStore(),
    }

    componentDidMount() {
        store.addEventListener(this.changeDataFromStore);
    }

    componentWillUnmount() {
        store.removeEventListener(this.changeDataFromStore);
    }

    changeDataFromStore = () => {
        this.setState({
            ...store.getStore()
        })
    }
    render() {
        const { articles, counterToShow, itemToEdit } = this.state;
        const elements = articles.map((item, index) => {
            const { id } = item;
            return (
                index + 1 <= counterToShow ? <NewsItem key={id} {...item} /> : null
            )
        });

        return (
            <>
                <div className={`${styles['news-list']} d-flex flex-wrap justify-content-between align-items-start align-content-start`}>
                    {elements}
                </div>
                <Modal newsProps={itemToEdit !== null ? articles[itemToEdit] : { id: '', title: '', description: '', url: '', urlToImage: '' }} />
                {counterToShow < articles.length ?
                    <div className={styles['btn-wrapper']}>
                        <Button theme='link link_underscored' handleClick={showMore}>
                            Show more
                        </Button>
                    </div> : null}
            </>
        )
    }
}

export default NewsList;