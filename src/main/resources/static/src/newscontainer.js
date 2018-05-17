import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        console.log(this.props.item);
        return (
            <article className="newsItem">
                <h3></h3>
                <a href="">Gå till artikel</a>
                <p><time></time></p>
            </article>
        );
    }
}


class NewsContainer extends Component {
    render() {
        return (
            <div className="newsContainer">
                <h2>Title</h2>
                <NewsItem item={this.props.items[0]}/>
            </div>
            );

    }
}

export default NewsContainer;