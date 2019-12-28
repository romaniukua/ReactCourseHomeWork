import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

const Header = () => {
    return (
        <header className={`header text-center ${styles.header}`}>
            <Link className={styles.title__link} to='/'><h1 className={`${styles.title}`}>Top News</h1></Link>
        </header>
    )
}

export default Header;