import React, { Component } from 'react';

export default class SignIn extends Component {
    render() {
        return (
            <div>
                 <h1>SIGN IN</h1>
                    <form style={{ margin: 20 + 'px' }} method="POST">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={this.inputHandler}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Password"
                                onChange={this.inputHandler}
                            />
                        </div>
                        <div>
                            <button>SIGN IN</button>
                        </div>
                    </form>

                
            </div>
        )
    }
}
