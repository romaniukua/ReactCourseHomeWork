import React, { Component } from 'react';

export default class Modal extends Component {
    state = {
        title: '',
        urlToImage: '',
        url: '',
        description: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            ...this.state,
        }

        this.props.addNews(data);
        this.clearForm();
        $('#exampleModal').modal('hide');
    }

    clearForm = () => {
        this.setState({
            title: '',
            urlToImage: '',
            url: '',
            description: ''
        });
    }
    
    render() {
        const { title, urlToImage, url, description } = this.state;
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add news</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="modal-form" className="w-75 mx-auto" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" className="form-control" value={title} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="urlToImage">Link to Image</label>
                                    <input type="text" id="urlToImage" name="urlToImage" className="form-control" value = {urlToImage} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="url">Link to news</label>
                                    <input type="text" id="url" name="url" className="form-control" value = {url} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" className="form-control" value = {description} onChange={this.handleChange} required/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}