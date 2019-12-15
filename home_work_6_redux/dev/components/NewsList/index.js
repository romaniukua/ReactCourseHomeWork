import React, { Component } from 'react';
import NewsItem from '../NewsItem';
import Modal from '../Modal';
import Button from '../Button';
import { connect } from 'react-redux';

import { showMore, unsetItem, newsFetchData } from '../../actions';
import styles from './style.scss';

class NewsList extends Component {
    componentDidMount(){
        const { newsFetchData } = this.props;
        newsFetchData();
    }
    render(){
        const { articles, counterToShow, itemToEdit, showMore, unsetItem } = this.props;
        const elements = articles.map((item, index) => {
            const { id } = item;
            return (
                index + 1 <= counterToShow ? <NewsItem key={id} {...item} /> : null
            )
        });
        return (
            <>
                <Button theme='secondary'
                    data-toggle="modal" 
                    data-target="#exampleModal" 
                    handleClick = {unsetItem}
                >
                    Add news
                </Button>
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
        );
    }
}

const mapStateToProps = (store) => {
    const {articles, counterToShow, itemToEdit} = store;
    
    return {
        articles,
        counterToShow,
        itemToEdit
    }
};


export default connect(mapStateToProps, { showMore, unsetItem, newsFetchData })(NewsList);