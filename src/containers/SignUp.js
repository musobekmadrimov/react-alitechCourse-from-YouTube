import React, { Component } from 'react';
const initialState = {fullName: '', email: '', password: '', type: 'admin'}
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }

    inputHandler = event => {
        event.preventDefault();
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    formHandler = event => {
        event.preventDefault();
        console.log('Form submitted!');
    }

    resetHandler = event => {
        this.setState(initialState)
    }

    render() {
        const { fullName, email, password, type } = this.state;
        return (
            <div>
                <h1>SignUp Now!</h1>
                <form action="" onSubmit={this.formHandler}>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Name"
                            value={fullName}
                            onChange={this.inputHandler}
                        />
                        <h4>Full Name is: {fullName}</h4>
                    </div>
                    <div>
                        <label htmlFor="">Full Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={this.inputHandler}
                        />
                        <h4>Email is: {email}</h4>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={this.inputHandler}
                        />
                        <h4>Password is: {password}</h4>
                    </div>
                    <div>
                        <select name="type" onChange={this.inputHandler} value={type}>
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit">SIGN UP</button>
                    <button type="reset" onClick={this.resetHandler}>CLEAR</button>


                </form>
            </div>
        )
    }

}

export default SignUp;
