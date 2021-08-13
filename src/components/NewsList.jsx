import React, { Component } from 'react';
import Article from './Article';
import './NewsList.css';

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
            <div class="container">
                {this.state.articles.map(article => (
                    <div>
                        <Article article={article} /> 
                    </div>

                ))}
            </div>
        );
    }
}

export default NewsList;