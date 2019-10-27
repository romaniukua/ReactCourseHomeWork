import React from 'react';

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props;
    return (
        <div className="news-item card" style={{width: 40 + '%'}}>
            <img className="card-img-top" src={urlToImage} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default NewsItem;