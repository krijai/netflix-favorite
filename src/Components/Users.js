import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const response = await axios.get('/users')
    this.setState({users: response.data})
    console.log(response);
  }

  render() {
    return(
      <div>
        <h1> Users </h1>
      </div>
    )
  }
}

export default Users