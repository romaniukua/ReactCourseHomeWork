import React from 'react';
import Header from '../Header';
import NewsList from '../NewsList';
import Button from '../Button';

import { unsetItem } from '../../actions'

import styles from './style.scss';



const App = () => (
    <div className={`${styles.wrapper} container d-flex flex-column bg-white`}>
        <Header/>
        <Button theme='secondary' data-toggle="modal" data-target="#exampleModal" handleClick = {unsetItem}>Add news</Button>
        <NewsList/>
    </div>
);

export default App;
    
