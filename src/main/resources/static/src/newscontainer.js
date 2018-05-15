import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        return (
            <article className="newsItem">
                <h3>{this.props.item.title}</h3>
                <a href={this.props.item.link}>Gå till artikel</a>
                <p><time>{this.props.item.pubDate}</time></p>
            </article>
        );
    }
}


class NewsContainer extends Component {
    render() {
        return (
            <div className="newsContainer">
                <h2>{this.props.source.title}</h2>
                <NewsItem item={this.props.source.item}/>
            </div>
            );

    }
}

export default NewsContainer;