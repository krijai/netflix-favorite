import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Movies extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    const response = await axios.get('/movies')
    this.setState({movies: response.data})
    console.log(response);
  }
  render() {
    return(
      <div>
        <h1> Movies </h1>
      </div>
    )
  }
}

export default Movies