import React from "react";
import ReactDOM from "react-dom";
import NewsContainer from "./newscontainer";
import axios from 'axios';
import "./styles.css";


let destination = document.querySelector("#root");
class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newsPaper: {
                title: '',
                items: [{}]
            }
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/")
      .then(res => {
        this.setState({
            newsPaper: res.data
        })
      })
    }
    

    render() {
        console.log(this.state.newsPaper);
        let contentStyle = {
            backgroundColor: "#FFDE00",
            fontFamily: "monospace",
        }
        return (
            <div className="main">
                <h1 className="mainHeader">Nyhetsflöde</h1>
                <div style={contentStyle} className="content">
                    <NewsContainer newsPaper={this.state.newsPaper} />
                    <NewsContainer newsPaper={this.state.newsPaper} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Content />,
    destination
);