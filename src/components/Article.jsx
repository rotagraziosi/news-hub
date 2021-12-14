import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  render() {
    return (
      <div
        className="card"
        onClick={() => this.openInNewTab(this.props.article.url)}
      >
        <div className="card-header">
          <img alt="article illustration" src={this.props.article.imageUrl} />
        </div>
        <div className="card-body">
          <span className="tag"> {this.props.article.source}</span>
          <h4>{this.props.article.title}</h4>
          <p>{this.props.article.description}</p>
        </div>
        <div className="user">
          <div className="user-info">
            <h5>{this.props.article.author}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
