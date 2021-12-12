import React, { Component } from 'react'
import './App.css'
import Auth from './auth/Auth'
import Profile from './Profile'

export default class App extends Component {

  constructor (props){
    super(props)
    this.state= {
      employees :[
        {
          name: "Bob",
          position : "RCH"
        },
        {
          name: "karim",
          position : "Director"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Auth />
        {
          
          this.state.employees.map(emp =>{
              return <Profile name={emp.name} position ={emp.position} />
          })
        }
      </div>
    )
  }
}
