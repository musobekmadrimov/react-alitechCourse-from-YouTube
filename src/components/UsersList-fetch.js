import React, { Component } from 'react';


export default class UsersList extends Component {
    state = {
        users: [],
        name: '',
        job: ''
    }

    componentDidMount(){
        this.getUsersFromServer();
    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    createUser = () => {
        const url = `https://reqres.in/api/users`;
        const {name, job} = this.state;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, job})
        })
        .then(res => res.json())
        .then(data => this.setState(prevState => ({users: [...prevState.users, {...data, first_name: data.name, last_name: data.job}]})))
        .catch(err => console.error(err));
    }

    getUsersFromServer = (num = 1) => {
        const url = `https://reqres.in/api/users?page=${num}`;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({users: data.data}))
        .catch(err => console.error(err));
    }
    render() {
        console.log(this.state)
        const {users} = this.state;
        return (
            <div>
                <h2>Users List</h2>
                <div>
                    <p>
                    <input type="text" name="name" onChange={this.handleInput}/>
                    </p>
                    <p>
                    <input type="text" name="job" onChange={this.handleInput}/>
                    </p>
                    <button onClick={this.createUser}>CREATE</button>

                </div>
                <ul>{
                        users.map(item => {
                            return(
                                <li key={item.id}>
                                    <img src={item.avatar} alt={item.first_name + item.last_name}/>
                                    {`${item.first_name} ${item.last_name}`}
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => this.getUsersFromServer(1)}>Page 1</button>
                <button onClick={() => this.getUsersFromServer(2)}>Page 2</button>

            </div>
        )
    }
}
