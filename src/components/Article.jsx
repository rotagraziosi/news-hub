import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
   
    render() {
        return (
            <div>
                 <img alt="article illustration" src={this.props.article.urlToImage} />
                    <div>{this.props.article.title}</div>
                    <div>{this.props.article.author}</div>
                    <div>{this.props.article.description}</div>
                    <div>{this.props.article.content}</div>
            </div>
        );
    }
}

export default Article;