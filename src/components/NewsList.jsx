import React, { Component } from 'react';
import Article from './Article';
import './NewsList.css';

class NewsList extends Component {

    state = {
        articles: [],
      };
    componentDidMount() {

        let stategy = 'newYorkTimes';

        const apiKey = 'de15fd661e714471950156545a4e2f9d';
        const url = `https://newsapi.org/v2/everything?q="moto"OR"skate"&language=fr&apiKey=${apiKey}`;

        switch(stategy){
            case 'newsApi':
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const articles = data.articles.map(x => { 
                        return {
                            imageUrl: x.urlToImage,
                            source: x.source.name,
                            title: x.title,
                            description: x.description,
                            author: x.author,
                            url: x.url
                        };
                    })
                    this.setState({ articles: articles })
                });
            break;
            case 'mediaStack':
                const mediaStackApiKey = '2a204499c90200919133bde256665f2f';
                const mediaStackUrl =`http://api.mediastack.com/v1/news?access_key=${mediaStackApiKey}&keywords=skateboard`;
                fetch(mediaStackUrl)
                .then(response => response.json())
                .then(data => {
                    const articles = data.data.map(x => { 
                        return {
                            imageUrl: x.image,
                            source: x.source,
                            title: x.title,
                            description: x.description,
                            author: x.author,
                            url: x.url
                        };
                    })
                    this.setState({ articles: articles })
                });
            break;

            default:
                this.setState({articles: []});
            break;

            case 'newYorkTimes':
                const nyTimesApiKey= 'ZzUlA9aM96JYwlHVrHWp9vZkO89lg5oO';
                const nyTimeUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=france&api-key=${nyTimesApiKey}`;

                fetch(nyTimeUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const articles = data.response.docs.map(x => { 
                        return {
                            imageUrl: `http://nytimes.com/${x.multimedia[0].url}`,
                            source: x.source,
                            title: x.headline.main,
                            description: x.lead_paragraph,
                            author: x.author,
                            url: x.web_url
                        };
                    })
                    this.setState({ articles: articles })
                });
            break;
        }
    }


    render() {
        return (
            <div className="container">
                {this.state.articles.map((article,index) => (
                    <div key={index}>
                        <Article article={article} /> 
                    </div>

                ))}
            </div>
        );
    }
}

export default NewsList;