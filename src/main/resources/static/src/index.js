import React from "react";
import ReactDOM from "react-dom";
import NewsContainer from "./newscontainer";
import axios from 'axios';
import "./styles.css";


let destination = document.querySelector("#root");

const EXPRESSEN = {
    channel: {
        title: "Expressen: Nyheter",
        link: "https://www.expressen.se/",
        image: {
            url: "https://www.expressen.se/Static/images/rss/getting_rss.png"
        },
        item: {
            link: "https://www.expressen.se/nyheter/kungligt/efter-sveket-meghan-vadjar-att-pappan-ska-komma-pa-brollopet/",
            author: "emelie.lundberg@expressen.se (Emelie Lundberg)",
            title: "Efter sveket: Meghan vädjar att pappan ska komma på bröllopet",
            pubDate: "Tue, 15 May 2018 10:32:47 +0200"
        }
    }
};

const AFTONBLADET = {
    channel: {
        title: "Aftonbladet: Sveriges nyhetskälla och mötesplats",
        link: "http://www.aftonbladet.se/",
        image: {
            url: ""
        },
        item: {
            link: "http://www.aftonbladet.se/sportbladet/hockey/a/3jdBxM/tv4-straffas-for-missen-under-shl-slutspelet",
            author: "",
            title: "TV4 straffas efter tittarnas ilska under SHL-slutspelet",
            pubDate: "Tue, 15 May 2018 11:40:32 +0200"
        }
    }
}

class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/")
      .then(res => {
        this.setState({
            items: res.data.items
        })
      })
    }
    

    render() {
        let contentStyle = {
            backgroundColor: "#FFDE00",
            fontFamily: "monospace",
        }
        return (
            <div className="main">
                <h1 className="mainHeader">Nyhetsflöde</h1>
                <div style={contentStyle} className="content">
                    <NewsContainer items={this.state.items} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Content />,
    destination
);