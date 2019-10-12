import React from 'react';
import PostListItem from '../post-list-item';



const PostList = ({posts, onDeleted}) => {

    const elements = posts.map(item => {

        const { id, ...itemProps } = item;

        return <PostListItem key={id} {...itemProps} onDeleted = {() => {onDeleted(id)}}/>
    });

    return(
        <ul className="list">
            {elements}
        </ul>
    );
};

export default PostList;