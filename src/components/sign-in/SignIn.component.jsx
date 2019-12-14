import React, { Component } from 'react';
import './SignIn.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email : "", password: "" })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name="email" type="text" value={this.state.email} 
                        onChange={this.handleChange} required />
                    <label>Password</label>
                    <input name="password" type="password" value={this.state.password} 
                        onChange={this.handleChange} required />
                    <button type="submit">Submit Form</button>
                </form>
            </div>
        )
    }
}

export default SignIn