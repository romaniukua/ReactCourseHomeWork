import React from 'react';

const NewsItem = (props) => {
    console.log(props);
    return (
        <div className="news-item card" style={{width: 40 + '%'}}>
            <img className="card-img-top" src={props.urlToImage} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default NewsItem;