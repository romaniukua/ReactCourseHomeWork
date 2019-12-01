import React, { Component } from 'react';
import Button from '../Button';

export default class Modal extends Component {
    state = {
        id: '',
        title: '',
        urlToImage: '',
        url: '',
        description: ''
    }

    UNSAFE_componentWillReceiveProps({newsProps}){
        this.setState({
            ...newsProps
        });
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, ...rest } = this.state;
        const data = {
            id: id || Date.now(),
            ...rest,
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
                            <Button theme = 'close' data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </Button>
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
                                    <Button theme='secondary' data-dismiss="modal">Close</Button>
                                    <Button type="submit" theme='primary'>Save changes</Button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}