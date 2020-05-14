import React, {Component} from "react";
import './App.css';
import Dogs from "./components/Dogs/Dogs";
import Score from "./components/Score/Score";
import Wrapper from "./components/Wrapper/Wrapper"
import dogPictures from "./dogs.json";

class App extends Component {
  state = {
    dogPictures,
    dogClickID:[],
    score: 0,
    goal: 10,
    status: ""
  };

  shuffleCards = id => {
    let dogClickID = this.state.dogClickID;

    if(dogClickID.includes(id)){
      this.setState({dogClickID: [], score: 0, status: "Loser! Wanna give it another go?"});
      console.log('Loss');
      return;
    } else{
      dogClickID.push(id)

      if(dogClickID.length === 10){
        this.setState({score:10, status: "Winner! Play again!", dogClickID: []});
        console.log('Win');
        return;
    }
    
    this.setState({dogPictures, dogClickID, score: dogClickID.length, status: " "});
    
    for (let i = dogPictures.length - 1; i > 0; i--) {
      let z = Math.floor(Math.random() * (i + 1));
      [dogPictures[i], dogPictures[z]] = [dogPictures[z], dogPictures[i]];
    }
  }
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Clicky Game</h1>
        <p className="App-intro">
          Don't click the same image twice, or else!
        </p>
      </header>
      <Score total={this.state.score}
             goal={10}
             status={this.state.status}
             />
      <Wrapper>
        {this.state.dogPictures.map(doggos=> (
          <Dogs
            shuffleCards={this.shuffleCards}
            id={doggos.id}
            key={doggos.id}
            image={doggos.image}
          />
        ))}
      </Wrapper>
  </div>
  );
}
}

export default App;
