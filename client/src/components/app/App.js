import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    loading: true,
  }

  componentWillMount = async () => {
    const response = await fetch('/api/ping')
    const json = await response.json()
    if (json.message) this.setState({ loading: false})
  }

  render() {
    return (
      <div className="App">
        {
          !this.state.loading &&
          <h1>You've connected to the server!</h1>
        }
      </div>
    );
  }
}

export default App;
