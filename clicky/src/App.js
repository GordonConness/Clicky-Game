import React, { Component } from 'react';
import './App.css';
import Dogs from "./components/Dogs";
import Score from "./components/Score";
import dogPictures from "./dogs.json";

class App extends Component {
  state = {
    dogPictures,
    dogClickID:[],
    score: 0,
    goal: 10,
    status: ""
  };
}

export default App;
