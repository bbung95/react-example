import React, { Component } from "react";

class ClockClass extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        console.log(this.state.date);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, wolrd!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClockClass;
