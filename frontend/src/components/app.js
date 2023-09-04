import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import ReactDOM from 'react-dom/client'
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return <HomePage />;
    }
}
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);