import React from 'react';
import Header from '../Header';
import NewsList from '../NewsList';
import { Provider } from 'react-redux';

import store from '../../store';

import styles from './style.scss';



const App = () => (
    <Provider store = {store}>
        <div className={`${styles.wrapper} container d-flex flex-column bg-white`}>
            <Header/>
            <NewsList/>
        </div>
    </Provider>
);
    


export default App;