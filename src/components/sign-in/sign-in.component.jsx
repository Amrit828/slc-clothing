import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const {  name, value } = event.target;
    console.log(name, value)
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className="sign-in" onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span>Sing in with your email and password.</span>

        <form>
          <FormInput 
            name="email" 
            type="email"
            label="email" 
            value={this.state.email}
            handleChange={this.handleChange} 
            required 
          />
          <FormInput 
            name="password" 
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange} 
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton 
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;