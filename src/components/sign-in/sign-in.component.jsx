import React from 'react';
import FormInput from '../../components/from-input/from-input.component';
import CostumButton from '../costum-button.component/costum-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.style.scss';

// Class Component - because we have to store what the user is typing in 

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <from onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='button'>
                        <CostumButton type='submit'> Sign in </CostumButton>
                        <CostumButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CostumButton>
                    </div>
                </from>
            </div>
        )
    }
}


export default SignIn