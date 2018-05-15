import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        return (
            <article className="newsItem">
                <h3>{this.props.item.title}</h3>
                <p>Av: <cite>{this.props.item.author}</cite></p>
                <a href={this.props.item.link}>Gå till artikel</a>
                <p><time>{this.props.item.pubDate}</time></p>
            </article>
        );
    }
}


class NewsContainer extends Component {
    // componentDidMount() {
    //     fetch('/')
    //     .then(results => {
    //         return results.json();
    //     }).then(function(myJson) {
    //         console.log(myJson);
    //     });

    // }

    render() {
        return (
            <div className="newsContainer">
                <h2>{this.props.source.title}</h2>
                <img className="image" src={this.props.source.image.url} alt="Källa"/>
                <NewsItem item={this.props.source.item}/>
            </div>
            );

    }
}

export default NewsContainer;