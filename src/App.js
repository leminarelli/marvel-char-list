import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm/LoginForm";
import CharactersList from "./components/CharactersList/CharactersList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/characters-list" component={CharactersList} />
          <Route path="/character-details" component={CharacterDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
