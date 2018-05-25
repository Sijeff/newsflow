import React from "react";
import ReactDOM from "react-dom";
import NewsContainer from "./newscontainer";
import axios from 'axios';
import "./styles.css";


let destination = document.querySelector("#root");

function getCurrentYear(){
    let date = new Date();
    return date.getFullYear();
}
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
        let oddStyle = {
            backgroundColor: '#7DE8DA',
        }
        let evenStyle = {
            backgroundColor: '#7DBDE8',
        }
        return (
            <div className="content">
                <div className="header">
                    <h1 className="mainHeader">Nyhetsflöde</h1>
                </div>
                <div className="columns">
                    {this.state.newspapers.map(function (newspaper, i) {
                        if (i % 2 === 0) {
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
                <footer><p><strong><small>&copy; {getCurrentYear()} Henrik Olsson & Simon Pellijeff</small></strong></p></footer>
            </div>

        );
    }
}

ReactDOM.render(
    <Content />,
    destination
);