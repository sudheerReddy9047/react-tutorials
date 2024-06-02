import React, { Component } from "react";
import { useNavigate } from "react-router-dom";


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'alpha@gmail.com',
            password: 'sample',
            message: ''
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-9">
                    <h4 className="m-1 p-2 border-bottom">Login</h4>
                    <div className="form-group form-row">
                        <label className="col-lg-4">Email:</label>
                        <input type="text" className="form-control" autoComplete="off" value={this.state.email} onChange={(event) => this.handleChange('email', event.target.value)} />
                    </div>
                    <div className="form-group form-row">
                        <label className="col-lg-4">Password:</label>
                        <input type="password" className="form-control" autoComplete="off" value={this.state.password} onChange={(event) => this.handleChange('password', event.target.value)} />
                    </div>

                    <div className="form-group form-row">
                        <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
                        {this.state.message && <label className="ml-2">{this.state.message}</label>}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    handleChange(field, value) {
        this.setState({ [field]: value })
    }

    onLoginClick = async () => {
        const { navigate } = this.props;
        fetch('http://localhost:3000/customers?email=' + this.state.email + '&id=' + this.state.password).then(r => r.json()).then(r => {
            if (r.length) {
                this.setState({
                    message: <span className="text-success">Login success</span>
                });
                navigate('/customers');
                this.props.onLoginSuccess();
            } else {
                this.setState({
                    message: <span className="text-warning">Login failed</span>
                })
            }
        })
    }
}

function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

export default withNavigation(LoginComponent);
