import React, { Component } from 'react';
import NewsService from '../../service/NewsService';
import Header from '../Header';
import NewsList from '../NewsList';
import Modal from '../Modal';

export default class App extends Component {
    service  = new NewsService();
    state = {
        articles: [],
        counterToShow: 4
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

    componentDidUpdate(){
        const { articles } = this.state;
        localStorage.setItem('savedNews', JSON.stringify(articles.filter(item => item.id )));
    }

    createNews = (item) => {
        const { articles } = this.state;
        this.setState({
            articles: [item, ...articles],
        });
    }

    handleNewsToShow = () => {
        const { counterToShow } = this.state;
        this.setState({
            counterToShow: counterToShow + 2
        });
    }
    
    render(){
        const {articles, counterToShow} = this.state;
        return(
            <div className="container d-flex flex-column bg-white">
                <Header/>
                <button className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">Add news</button>
                <NewsList articles = {articles} newsCounter = {counterToShow}/>
                <button className='btn btn-link' onClick={this.handleNewsToShow}>Show more</button>
                <Modal addNews = {this.createNews}/>
            </div>
        )
    }
}