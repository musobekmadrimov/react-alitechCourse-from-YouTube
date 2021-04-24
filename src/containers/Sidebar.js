import React, {Component} from 'react';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:{
                name: '',
                img: '',
                
            },
            num: 0
        }
        console.log('[Constructor]......')
    }

    componentDidMount(){
        console.log('[Component Did Mount()]......')
        this.setState({
            user: {
                name: 'Musobek', 
                img: 'img/avatar.png'
            }
        })
    }

    updateNumber = () => {
        if(this.state.num < 3){

            this.setState(oldState => {
                return{
                    num: oldState.num + 1
                }
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.num, nextState.num);
        return true;
    }

    componentDidUpdate( prevProp, prevState){
        console.log(prevState.num, this.state.num)
    }

    componentWillUnmount(){
        console.log('Unmounting..')
    }

    render(){
        console.log('[Render]......')
        const {num} = this.state;
        return(
            <div>
                <h1>Hello, React! I am back! </h1>
                <h1>Number is {num}</h1>
                <button onClick={this.updateNumber}>Oshirish</button>
            </div>
        )
    }
}

export default Sidebar;