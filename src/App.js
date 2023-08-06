// import logo from './logo.svg';
 import './App.css';
import React from 'react';
import List from './list';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      user:[]
    }
  }
  
 
  render(){
    return(<>
        <h1 className="h1formate">ROBOT FFRIENDS</h1>
        <div className='formate'> <List mylist = {this.state.user}/></div>
        
        </>
    )
}


componentDidMount(){

    //api call
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    })
    .then(data => this.setState({user: data}));
   
}
}

export default App;
