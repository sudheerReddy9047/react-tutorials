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
                <div className="card-footer d-flex justify-content-between">
                    <div>
                        <div className="btn btn-primary btn-sm" onClick={() => this.props.onItemCopy(this.props.info, 'copy')}>Copy</div>
                        <div className="btn btn-danger btn-sm ml-2" onClick={this.props.onItemDelete}>Delete</div>
                    </div>
                    <div >{this.props.children}</div>
                </div>
            </div>
        </React.Fragment>
    }
}