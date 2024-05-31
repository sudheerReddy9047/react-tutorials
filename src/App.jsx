import React, { Component } from "react";
import { NavBar } from "./navBar";
import { MainContent } from "./mainContent";

export class AppComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <MainContent></MainContent>
            </React.Fragment>
        )
    }
}