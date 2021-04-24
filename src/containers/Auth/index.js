import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Auth extends Component {
    state = {
        fullName: '',
        password: '',
        email: '',
        authType: 'signIn'
    }

    changeAuth = () => {
        if(this.state.authType === 'signUp'){
            this.setState({authType: 'signIn'});
        } else{
            this.setState({authType: 'signUp'});
        }
    }
    render() {
        const { authType } = this.state;
        return(
            <div>
                {
                    authType === 'signIn'
                    ?
                    <SignIn />
                    :
                    <SignUp />
                    
                }
                <button 
                onClick={this.changeAuth}
                className={`btn ${authType === 'signIn' ? "btn-success" : "btn-primary"}` }
                >
                {authType === 'signIn' ? 'SIGN UP' : 'SIGN IN'}
                
                </button>
            </div>
        )
    }
}

export default Auth;