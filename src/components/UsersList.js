import React, { Component } from 'react';
import axios from '../libs/axios';
import './UsersList.css';
import {StyledInput, StyledTitle} from './input';

export default class UsersList extends Component {
    state = {
        users: [],
        name: '',
        job: ''
    }

    componentDidMount() {
        this.getUsersFromServer();
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    createUser = () => {
        const url = `/users`;
        const { name, job } = this.state;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({name, job})
        // })
        // .then(res => res.json())
        // .then(data => this.setState(prevState => ({users: [...prevState.users, {...data, first_name: data.name, last_name: data.job}]})))
        // .catch(err => console.error(err));
        axios.post(url, { name, job })
            .then(({ data }) => { this.setState(prevState => ({ users: [...prevState.users, { ...data, first_name: data.name, last_name: data.job }] })) })
    }

    getUsersFromServer = (num = 1) => {
        const url = `/users?page=${num}`;
        // fetch(url)
        // .then(res => res.json())
        // .then(data => this.setState({users: data.data}))
        // .catch(err => console.error(err));
        axios(url).then(({ data }) => this.setState({ users: data.data }))
    }
    render() {
        console.log(this.state)
        const { users } = this.state;
        return (
            <div className="container">
                <div className="createUser">
                    <h2>Users List</h2>
                    <p>
                        <input type="text" name="name" onChange={this.handleInput} />
                    </p>
                    <p>
                        <input type="text" name="job" onChange={this.handleInput} />
                    </p>
                    <button onClick={this.createUser}>CREATE</button>

                </div>
                <ul className="list">{
                    users.map(item => {
                        return (
                            <li key={item.id} className="list-item">
                                <img src={item.avatar} alt={item.first_name + item.last_name} />
                                {`${item.first_name} ${item.last_name}`}
                            </li>
                        )
                    })
                }
                </ul>
                <button onClick={() => this.getUsersFromServer(1)}>Page 1</button>
                <button onClick={() => this.getUsersFromServer(2)}>Page 2</button>


                <StyledTitle>Heading from styled-components </StyledTitle>
                <StyledInput placeholder="Test input from styled-component"/>

            </div>
        )
    }
}
