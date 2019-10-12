import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        post: '',
    }

    onNameChange = (e) => {
        this.setState(
            {name: e.target.value}
        )
    }

    onPostChange = (e) => {
        this.setState(
            {post: e.target.value}
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onPostAdded(this.state.name, this.state.post);
        this.setState({
            name: '',
            post: ''
        });
    }


    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={this.onNameChange} required value={this.state.name}/>
                <label htmlFor="text">Comment</label>
                <textarea name="text" id="text" onChange={this.onPostChange} required value={this.state.post}></textarea>
                <button className="button">post</button>
            </form> 
        )
    }
}

export default Form;