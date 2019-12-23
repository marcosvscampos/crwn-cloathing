import React from 'react';
import './SignInSignUp.styles.scss';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

const SignInSignUp = () => (
    <div className="sign-container">
        <SignIn />
        <div className="separator"></div>
        <SignUp />
    </div>
)

export default SignInSignUp;