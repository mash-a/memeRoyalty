import React, { Component } from 'react';
import './App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Form from "../form/Form";
import Images from "../imgs/Images";
import UrlMeme from "../form/UrlMeme"

class App extends Component {
  state = {
    loading: true,
    memes: []
  }

  componentWillMount = async () => {
    const response = await fetch('/api/memeges')
    const json = await response.json()
    console.log(json);
    if(json.memeges) this.setState({ loading: false, memes: json.memeges})
  }

  render() {
    return (
      <div className="App">
      <Header />
        <div className="container">
        {
          !this.state.loading &&
          <h1>get yer memes ready</h1>
        }
      <UrlMeme />
      <Images memes={this.state.memes}/>
      <Form />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
