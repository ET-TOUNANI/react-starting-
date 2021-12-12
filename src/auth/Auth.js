import React, { Component } from 'react'
import './Auth.css'

export default class Auth extends Component {
    constructor (props){
        super(props)
        this.state={
            count:0
        }
    }
    increment =()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement =()=>{
        this.setState({
            count : this.state.count -1 
        })
    }
    render() {
        return (
            <div className='auth'>
                <h1>hello world</h1>
                <p>my counter : {this.state.count}</p>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
