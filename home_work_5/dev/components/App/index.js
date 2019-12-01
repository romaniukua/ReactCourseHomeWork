import React, { Component } from 'react';
import NewsService from '../../service/NewsService';
import Header from '../Header';
import NewsList from '../NewsList';
import Modal from '../Modal';
import Button from '../Button'
import styles from './style.scss';

export default class App extends Component {
    service  = new NewsService();
    state = {
        articles: [],
        counterToShow: 4,
        requaredArticle: -1,
    }

    componentDidMount(){
        this.service.getTopNews().then(articles => {
            const savedNews = localStorage['savedNews'] ? JSON.parse(localStorage['savedNews']) : [];
            articles = [
                ...savedNews,
                ...articles
            ];
            this.setState({
                articles
            });
        });
    }

    createNews = (item) => {
        const { articles, requaredArticle } = this.state;
        if(requaredArticle >= 0){
            const newArr = [
                ...articles.slice(0, requaredArticle),
                item,
                ...articles.slice(requaredArticle + 1)
            ]
            this.setState({
                articles: newArr
            });
        } else{
            const savedNews = localStorage['savedNews'] ? JSON.parse(localStorage['savedNews']) : [];
            localStorage.setItem('savedNews', JSON.stringify([item, ...savedNews]));
            this.setState({
                articles: [item, ...articles],
            });
        }
    }

    unsetArticleItem = () => {
        this.setState({
            requaredArticle: -1
        })
    }

    deleteNews = (id) => {
        const { articles } = this.state;
        const newArr = [
            ...articles.filter(article => {
                return article.id !== id;
            })
        ];
        const savedNews = JSON.parse(localStorage['savedNews']) ? JSON.parse(localStorage['savedNews']).filter(item => item.id !== id) : [];
        localStorage.setItem('savedNews', JSON.stringify(savedNews));
        
        this.setState({
            articles: newArr
        });
    }

    findItem = (id) => {
        const {articles} = this.state;
        const idx = articles.findIndex(item => item.id === id);
        this.setState({
            requaredArticle: idx
        });
    }

    handleNewsToShow = () => {
        const { counterToShow } = this.state;
        this.setState({
            counterToShow: counterToShow + 2
        });
    }
    
    render(){
        const {articles, counterToShow, requaredArticle} = this.state;
        return(
            <div className={`${styles.wrapper} container d-flex flex-column bg-white`}>
                <Header/>
                <Button theme='secondary' data-toggle="modal" data-target="#exampleModal" unsetModal = {this.unsetArticleItem}>Add news</Button>
                <NewsList articles = {articles} newsCounter = {counterToShow} onDeleted = {this.deleteNews} onEdit = {this.findItem}/>
                <div className={styles['btn-wrapper']}>
                    <Button theme='link link_underscored' handleNewsToShow={this.handleNewsToShow}>
                        Show more
                    </Button>
                </div>
                <Modal addNews = {this.createNews} newsProps = {articles[requaredArticle] ? articles[requaredArticle] : {id: '', title: '', description: '', url: '', urlToImage: ''}}/>
            </div>
        )
    }
}