import React from "react";
import ReactDOM from "react-dom";
import NewsContainer from "./newscontainer";
import axios from 'axios';
import "./styles.css";


let destination = document.querySelector("#root");
class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newspapers: [{
                name: '',
                items: []
            }]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/")
            .then(res => {
                console.log(res.data);
                this.setState({
                    newspapers: res.data
                })
            })
    }


    render() {
        console.log(this.state.newsPaper);
        let contentStyle = {
            fontFamily: "monospace",
        }
        let oddStyle = {
            backgroundColor: '#8FB2CF',
        }
        let evenStyle = {
            backgroundColor: '#8DDBD5',
        }
        return (
            <div className="main">
                <div className="header">
                    <h1 className="mainHeader">Nyhetsflöde</h1>
                    <div style={contentStyle} className="content">
                        {this.state.newspapers.map(function (newspaper, i) {
                            if(i % 2 === 0){
                                return (
                                    <div style={evenStyle} className="column" key={i}>
                                        <NewsContainer newspaper={newspaper} key={i} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div style={oddStyle} className="column" key={i}>
                                        <NewsContainer newspaper={newspaper} key={i} />
                                    </div>
                                )
                            }
                            
                            
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Content />,
    destination
);