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
    const books = this.state.books.map ((book) => {
      return <Book key={book.id} book={book} />;
    });
    return (
      <div className="App">
        <Header />
        {
          !this.state.loading &&
          <p>You've connected to the server!</p> 
        }
      </div>
    );
  }
}

export default App;
