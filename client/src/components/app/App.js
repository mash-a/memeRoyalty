import React, { Component } from 'react';
import './App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Form from "../form/Form";
import Image from "../img/Image";
import UrlMeme from "../form/UrlMeme";

class App extends Component {
  state = {
    loading: true,
    editing: false,
    memes: [],
    currentMeme: {
      id: null,
      url: "",
      tagString: "",
      votes: ""
    }
  }

  componentWillMount = async () => {
    const response = await fetch('/api/memeges')
    const json = await response.json()
    if(json.memeges) this.setState({ loading: false, memes: json.memeges})
  }

  updateMemes = memes => {
    this.setState({
      memes: memes,
      editing: false,
      currentMeme: {
        id: null,
        url: "",
        tagString: "",
        votes: ""
      }
    })
  }

  updateMeme = (attribute, newValue) => {
    this.setState({currentMeme: {
      ...this.state.currentMeme, 
      [attribute]: newValue
      }
    })
  }

  editMeme = id => {
    const meme = this.state.memes.filter((meme) => meme.id === id)[0]
    this.setState({editing: true, currentMeme: meme})
  }

  render() {
    return (
      <div className="App">
      <Header />
        <div className="container">
      <UrlMeme currentMeme={this.state.currentMeme} 
               updateMemes={this.updateMemes}
               updateMeme={this.updateMeme}
               editing={this.state.editing}

               />
        {
          !this.state.loading &&
          <h1>get yer memes ready</h1>
        }

      {
        this.state.memes.map((meme) => (<Image 
        key={meme.id} 
        meme={meme} 
        editMeme={this.editMeme}
        updateMemes={this.updateMemes}
        />))
      }
      <Form />
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
