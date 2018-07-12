import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Movies from './Components/Movies'
import Users from './Components/Users'
import InputField from './Components/Input'
import MovieDetails from './Components/MovieDetails'
import MovieGridList from './Components/GridList'

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      email: null,
      phone: null,
      movie_list: [],
      open: false,
    }
  };

  async componentDidMount() {
    const response = await axios.get('/users')
    const movie_list_response = await axios.get('/movies')
    this.setState({
      user: response.data.user,
      email: response.data.email,
      phone: response.data.phone,
      movie_list: movie_list_response.data
    })
  }

  handleOpen = (index) => {
    this.setState({ open: index });
    console.log('handle open');
  };

  handleClose = () => {
    this.setState({ open: false });
    console.log('handle close');
  };

  render(){
    const handleChange = (e, userName) => {
      this.setState({userName: e.target.value})
    }

    var list = 
    <div>
      {this.state.movie_list.map((list, key) => {
        return(
          <div>
            <MovieGridList list={list} key={key} handleOpen={this.handleOpen.bind(this, key)} handleClose = {this.handleClose.bind(this)} />
            <MovieDetails list={list} open={this.state.open === key} handleOpen={this.handleOpen.bind(this)} handleClose = {this.handleClose.bind(this)}/>
          </div>
        )
      })}
    </div>
  
    return(
      <Router>
        <div>
          <h1> Welcome {this.state.user}!</h1>
          <label>User Name: </label>
          <InputField value={this.state.user}/>
          <Link to='/movies'>Click here to see all of the Movie Lists!</Link>
          <Route path='/movies' component={Movies} />
          <br/>
          <Link to='/users'>Click here to see all of the users!</Link>
          <Route path='/users' component={Users} />
          {/* <Route path='/posts/:post_id' component={Post} /> */}
          {list}
        </div>
      </Router>
    )
  }
}

export default App