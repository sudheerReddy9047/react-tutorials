import React, { Component } from "react";

export class CustomerInfo extends Component {

    render() {
        return <React.Fragment>
            <div className="card">
                <div className="card-header">{this.props.info.name}</div>
                <div className="card-body">
                    <div>Name: {this.props.info.name}</div>
                    <div>ID: {this.props.info.id}</div>
                </div>
                <div className="card-footer">Price : {this.props.info.price}</div>
            </div>
        </React.Fragment>
    }
}