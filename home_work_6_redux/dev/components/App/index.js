import React from 'react';
import Header from '../Header';
import NewsList from '../NewsList';
import NewsDetailedInfo from '../NewsDetailedInfo'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import store from '../../store';

import styles from './style.scss';



const App = () => (
    <Provider store = {store}>
        <div className={`${styles.wrapper} container d-flex flex-column bg-white`}>
            <Router>
                <Header/>
                <Route path = '/' exact component = {NewsList}/>
                <Route path = '/news/:newsId' component = {NewsDetailedInfo}/>
            </Router>
        </div>
    </Provider>
);
    


export default App;