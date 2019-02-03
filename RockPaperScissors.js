import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return(
    <button className="btn-change-state" onClick = {props.winner}>kiski kismat chamkegi</button>
  )
}
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    user: 0,
    computer: 0,
    draws: 0,
    turns: 0,
    result: null,
    }
    this.updateScores = this.updateScores.bind(this);
}
  updateScores = (userWins) => {
    switch(userWins) {
      case 'user': 
      this.setState({user: this.state.user + 1});
      break;
      
      case 'computer': 
      this.setState({computer: this.state.computer + 1});
      break;

      default:
      this.setState({draws: this.state.draws + 1}); 
    }
    this.setState({turns: this.state.turns + 1}, () => {
      console.log("Callback" + this.state.turns);
      if(this.state.turns === 10)
      (this.state.user>this.state.computer)?this.finalresult('user'):(this.state.user<this.state.computer)?this.finalresult('computer'):this.finalresult('draw');
    });
    console.log("Hey there" + this.state.turns);
  } 

  winner = () => {
    //console.log(this.state.turns);
    if(this.state.turns === 10) {  
    //  (this.state.user>this.state.computer)?this.finalresult('user'):(this.state.user<this.state.computer)?this.finalresult('computer'):this.finalresult('draw');
      return;
    }
    // if(this.state.turns === 10)
    // return;
    let options = ["Rock", "Paper", "Scissors"];
    let a = Math.floor(Math.random()*options.length);
    let b = Math.floor(Math.random()*options.length);   //(this.state.turns%2)?0:1; for testing

    if((a===0 && b===1) || (a===1 && b===2) || (a===2 && b===0)) {
      this.updateScores('computer');
      this.setState({result: options[a] + "(U) beaten by " + options[b] + "(C)"})
    } else if(a===b) {
      this.updateScores('draws');
      this.setState({result: options[a] + " Draws " + options[b]});
    } else {
      this.updateScores('user');
      this.setState({result: options[a] + "(U) beats " + options[b] + "(C)"})
    }
  }

  sample = (a,b) => {
    
  }

  finalresult = (winner) => {
    switch(winner) {
      case 'user': this.setState({result: 'User Wins'});
      break;
      case 'computer': this.setState({result: 'Computer Wins'});
      break;
      default: this.setState({result: 'Match Drawn'});
    }
  }

  render() {
    console.log("Game render called");
  return (
  <div>
    <Button winner = {this.winner} /> 
  	<div>
      User Score : {this.state.user} {"  "}        
  	  Computer Score : {this.state.computer} {" "}
      Draws : {this.state.draws}
    </div>
    <div> Result: {this.state.result} </div>
  </div>
  )
  }
}

class App extends React.Component {
  render() {
    console.log("render called");
  return (
  	<div><Game /></div>
  )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
