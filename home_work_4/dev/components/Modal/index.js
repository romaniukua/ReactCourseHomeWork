import React, { useState } from 'react';


const Modal = ({addNews}) => {

    const [title, changeTitle] = useState('');
    const [urlToImage, changeUrlToImage] = useState('');
    const [url, changeUrl] = useState('');
    const [description, changeDescription] = useState('');
    
    const handleChange = ({target}) => {
        const [name, value] = target;
        switch (name) {
            case 'title': 
                changeTitle(value);
                break;
            case 'urlToImage': 
                changeUrlToImage(value);
                break;
            case 'url': 
                changeUrl(value);
                break;
            case 'description': 
                changeDescription(value);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            title,
            urlToImage,
            url,
            description
        };
        addNews(data);
        changeTitle('');
        changeUrlToImage('');
        changeUrl('');
        changeDescription('');
        $('#exampleModal').modal('hide');

    }

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
                        <form id="modal-form" className="w-75 mx-auto" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" className="form-control" value={title} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="urlToImage">Link to Image</label>
                                <input type="text" id="urlToImage" name="urlToImage" className="form-control" value = {urlToImage} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="url">Link to news</label>
                                <input type="text" id="url" name="url" className="form-control" value = {url} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" className="form-control" value = {description} onChange={handleChange} required/>
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

export default Modal;