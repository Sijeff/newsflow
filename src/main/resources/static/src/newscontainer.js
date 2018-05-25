import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        return (
            <article className="newsItem">
                <a href={this.props.item.link}><h3>{this.props.item.title}</h3></a>
                <section dangerouslySetInnerHTML={{ __html: this.props.item.description }}></section>
                <p><time>{this.props.item.date}</time></p>
            </article>
        );
    }
}


class NewsContainer extends Component {
    render() {
        return (
            <div className="newsContainer">
                <h2 className="feedName">{this.props.newspaper.name}</h2>
                {this.props.newspaper.items.map(function (item, i) {
                    return <NewsItem item={item} key={i} />;
                })}
            </div>
        );

    }
}

export default NewsContainer;