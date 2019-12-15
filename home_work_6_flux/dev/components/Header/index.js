import React from 'react';
import styles from './style.scss';

const Header = () => {
    return (
        <header className={`header text-center ${styles.header}`}>
            <h1 className={`${styles.title}`}>Top News</h1>
        </header>
    )
}

export default Header;