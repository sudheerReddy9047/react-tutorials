import React, { Component } from 'react';

class Register extends Component {
    state = {
        email: '',
        password: '',
        fullName: '',
        dob: ''
    }
    render() {
        return (
            <div className='row m-0'>
                <div className="col-lg-6 m-auto">
                    <h4>Register</h4>
                    <div className='form-group form-row'>
                        <label className='col-lg-4 mt-3' htmlFor="email">Email</label>
                        <input className='col-lg-8 form-control' type='text' id="email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                        <label className='col-lg-4 mt-3' htmlFor="password">Password</label>
                        <input className='col-lg-8 form-control' type='password' id="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                        <label className='col-lg-4 mt-3' htmlFor="fullName">Full Name</label>
                        <input className='col-lg-8 form-control' type='text' id="fullName" value={this.state.fullName} onChange={(event) => this.setState({ fullName: event.target.value })} />
                        <label className='col-lg-4 mt-3' htmlFor="dob">Date of Birth</label>
                        <input className='col-lg-8 form-control' type='date' id="dob" value={this.state.dob} onChange={(event) => this.setState({ dob: event.target.value })} />

                        <button className='btn btn-primary' onClick={this.registerUser}>Register</button>
                    </div>
                </div>
            </div>
        );
    }

        registerUser = () => {

    }
}

export default Register;
