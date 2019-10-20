import React, { Component } from 'react';
import NewsService from '../../service/NewsService';
import Header from '../Header';
import NewsList from '../NewsList';


export default class App extends Component {
    service  = new NewsService();
    state = {
        articles: [],
        counterToShow: 2
    }

    componentDidMount(){
        this.service.getTopNews().then(articles=> {
            this.setState({
                articles
            });
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
                <NewsList articles = {articles} newsCounter = {counterToShow}/>
                <button className='btn btn-link' onClick={this.handleNewsToShow}>Show more</button>
            </div>
        )
    }
}