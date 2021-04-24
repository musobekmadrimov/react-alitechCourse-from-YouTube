import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                 <h1>Sign Up</h1>
                <form method="POST">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Name"
                            onChange={this.inputHandler}
                        />
                    </div>
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
                        <button>SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}
