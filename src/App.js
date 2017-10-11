import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';
import Images from './Images';
import axios from 'axios';
//import image from './images';

class App extends Component {
  constructor(){
    super()
    //state
    this.state = {
      dayLength: [],
      getTheRandomized: '',
      inputNum1: ''

    }

    this.theRandomized = this.theRandomized.bind(this);
  
  }
   
  theRandomized(){
    axios.get('http://localhost:3008/getRandomized')
    .then (response => {
      this.setState({
        getTheRandomized: response.data
      })
    })

  }

  componentDidMount(){
    console.log("SEE?")
    axios.get('http://localhost:3008/api/hello')
    .then (response =>{
      console.log(response)
      this.setState({
        dayLength: response.data.results.day_length
      })
    })
  }

  render() {
    console.log(this.state.something)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REGENERATE!</h1>
        </header>
        <p className="App-intro">
          Hit the button to generate an item and where you found it! 
            
        </p>
        <Data getString={this.state.getTheRandomized} />

        <Images />
        
        
        
        <button onClick={this.theRandomized} className='buttons'> Generate </button>
        <div className="flex-space" >Length of the day: {this.state.dayLength}</div>
        <div>  </div>
      </div>
    );
  }
}

export default App;
