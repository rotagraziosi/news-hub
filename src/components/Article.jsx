import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
   
    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <img alt="article illustration" src={this.props.article.urlToImage} />
                </div>
                <div class="card-body">
                    <span class="tag"> A NEW TAG</span>
                    <h4>{this.props.article.title}</h4>
                    <p>{this.props.article.description}</p>
                    
                </div>
                <div class="user">
                    <div class="user-info">
                        <h5>
                            {this.props.article.author}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;