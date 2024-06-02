import React, { Component } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";


import './index.css';

import { NavBar } from "./navBar";
import LoginComponent from "./login";
import CustomerList from './customerList';
import CustomerWiki from "./customerWiki";
import { PageNotFound } from "./pageNotFound";
import Sidebar from "./sidebar/sidebar";

export class AppComponent extends Component {

    render() {
        return (
            <HashRouter>
                <NavBar></NavBar>
                <div className="container-fluid">
                    <div className="row m-0">
                        <div className="col-lg-3"><Sidebar /></div>
                        <div className="col-lg-9">
                            <Routes>
                                <Route path="/" element={<LoginComponent onLoginSuccess={this.onLoginSuccess}></LoginComponent>} />
                                <Route path="/customers" element={<CustomerList></CustomerList>} />
                                <Route path="/customer-wiki/:name" element={<CustomerWiki />} />
                                <Route path="*" element={<PageNotFound></PageNotFound>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
    onLoginSuccess() {
        console.log('Login SuccessFul :',);
    }
}