import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return <h1>Testing React Code</h1>;
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv);