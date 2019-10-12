import React from 'react';

const PostListItem = ({name, text, onDeleted}) => {
    return (
        <li className="item">
            <header className="item__head">
                <h3 className="item__title">{name}</h3>
                <div className="item__action">
                    <button className="button button--small">edit</button>
                    <button className="button button--small" onClick = {onDeleted}>delete</button>
                </div>
            </header>
            <p>{text}</p>
        </li>
    );
} 

export default PostListItem;