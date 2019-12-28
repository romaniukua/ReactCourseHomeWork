import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { newsFetchDataSuccess, newsFetchData } from '../../actions';

class NewsDetailedInfo extends Component {
    state = {
        newsData: {},
        isLoading: true,
        error: '',
        redirect: false,
    }
    
    UNSAFE_componentWillReceiveProps(nextProps){
        const {articles} = nextProps;
        const { newsId } = this.props.match.params;
        const target = articles.find(item => item.id === newsId);
        if(target){
            this.setState({
                newsData: {
                    ...target
                },
                isLoading: false
            });
        } else {
            this.setState({
                isLoading: false,
                error: 'Sorry can\'t find this news'
            });
            setTimeout(()=>{
                this.setState({
                    redirect: true,
                })
            }, 2000);
        }
    }
    componentDidMount(){
        const { newsFetchData, articles } = this.props;
        const { newsId } = this.props.match.params;
        const target = articles.find(item => item.id == newsId);
        if(target){
            this.setState({
                newsData: {
                    ...target
                },
                isLoading: false
            });
        }else {
            newsFetchData();
        }
    }
    render() {
        const { urlToImage, title, description } = this.state.newsData;
        const { isLoading, error, redirect } = this.state;
        return (
            redirect ? <Redirect to='/'/> :
            isLoading ? <h1>Loading, wait for a moment</h1> : error ? <h1>{error}</h1> : (<div>
                <img className="card-img-top" src={urlToImage} alt="Card image cap"/>
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>
            </div>)
        )
    }
}

const mapStateToProps = (store) => {
    const {articles} = store;
    return {
        articles
    }
}

export default connect(mapStateToProps, {newsFetchDataSuccess, newsFetchData})(NewsDetailedInfo);
