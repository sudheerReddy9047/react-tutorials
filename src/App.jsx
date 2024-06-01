import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './index.css';

import { NavBar } from "./navBar";
import LoginComponent from "./login";
import CustomerList from './customerList';
import CustomerWiki from "./customerWiki";
import { PageNotFound } from "./pageNotFound";

export class AppComponent extends Component {

    render() {
        return (
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<LoginComponent onLoginSuccess={this.onLoginSuccess}></LoginComponent>} />
                    <Route path="/customers" element={<CustomerList></CustomerList>} />
                    <Route path="/customer-wiki/:name" element={<CustomerWiki />} />
                    <Route path="*" element={<PageNotFound></PageNotFound>} />
                </Routes>
            </BrowserRouter>
        )
    }
    onLoginSuccess() {
        console.log('Login SuccessFul :',);
    }
}