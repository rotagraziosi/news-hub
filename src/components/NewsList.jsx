import React, { Component } from 'react';

class NewsList extends Component {

    state = {
        articles: [],
      };
    componentDidMount() {
        const apiKey = 'de15fd661e714471950156545a4e2f9d';
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ articles: data.articles })
        });

    }


    render() {
        return (
            <div>
                {this.state.articles.map(article => (
                    <div>
                        <img alt="article illustration" src={article.urlToImage} />
                        <div> {article.title}</div>
                        <div> {article.author}</div>
                        <div>{article.description}</div>
                        <div>{article.content}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default NewsList;