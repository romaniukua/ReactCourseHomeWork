import React, { Component } from 'react';
import AppHeader from '../app-header'
import Form from '../form';
import PostList from '../post-list';

class App extends Component {

  state = {
    posts: [
      {name: 'Николай', text: 'олололололололо', id: 1},
      {name: 'Юрий', text: 'Всем привет', id: 2}
    ],
  }

  maxId = 100;

  onPostDelete = (id) => {
    this.setState(({posts}) => {
      const idx = posts.findIndex( el => el.id === id);
      const before = posts.slice(0, idx);
      const after = posts.slice(idx + 1);

      const newPosts = [...before, ...after];

      return {
        posts: newPosts,
      };

    });
  }

  onPostAdded = (name, post) => {
    const newPost = {
      id: this.maxId++,
      name: name,
      text: post
    }

    const newArr = [...this.state.posts, newPost];
    this.setState(() => {
      return {
        posts: newArr
      };
    })
    
  }

  render() {
    return (<div className="App box">
              <AppHeader/>
              <Form onPostAdded = {this.onPostAdded}/>
              <PostList posts = {this.state.posts} onDeleted = {this.onPostDelete}/>
            </div>
          );
  }
}

export default App;
