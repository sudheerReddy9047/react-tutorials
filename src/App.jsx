import React, { Component } from "react";
import { NavBar } from "./navBar";
import { CustomerList } from './customerList';
import './index.css';
export class AppComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <CustomerList></CustomerList>
            </React.Fragment>
        )
    }
}