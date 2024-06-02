import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";

class CustomerWiki extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.routeParams.name,
        }
    }

    componentDidMount() {
        console.log('props :', this.props.match);
    }
    render() {
        return (
            <React.Fragment>
                <div> this is a wiki page for {this.state.name}</div>
            </React.Fragment>
        )
    }
}

function withNavigation(Component) {
    return function WrappedComponent(props) {
        const routeParams = useParams();
        return <Component {...props} routeParams={routeParams} />;
    };
}

export default withNavigation(CustomerWiki);