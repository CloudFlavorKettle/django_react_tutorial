import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<h2>This is HomePage.</h2>} />
                    <Route path="join" element={<RoomJoinPage />} />
                    <Route path="create" element={<CreateRoomPage />} />
                </Routes>
            </Router>
        );
    }
}