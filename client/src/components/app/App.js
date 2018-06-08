import React, { Component } from 'react';
import './App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Image from "../img/Image";
import UrlMeme from "../form/UrlMeme";
import MemeRoyalty from "../MemeRoyalty/MemeRoyalty"
import axios from "axios";

class App extends Component {
  state = {
    loading: true,
    editing: false,
    memes: [],
    currentMeme: {
      id: null,
      url: "",
      tagString: "",
      votes: "",
      title: ""
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
        votes: "",
        title: ""
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

  upVote = () => {
    this.setState({currentMeme: {
      ...this.state.currentMeme,
      votes: this.state.currentMeme.votes + 1
    }})
  }

  downVote = () => {
    this.setState({currentMeme: {
      ...this.state.currentMeme,
      votes: this.state.currentMeme.votes - 1
    }})
  }

  apiPatch = () => {
    const {id, url, tagString, votes, title} = this.state.currentMeme
    axios.patch(`/api/memeges/${id}`, {url, tagString, votes, title}) 
    .then((result) => {
        this.updateMemes(result.data)
    })
}

stopEdit = () => {
  this.setState({editing: false,
  currentMeme: {
        id: null,
        url: "",
        tagString: "",
        votes: "",
        title: ""
  }
  })
}

  render() {
    return (
      <div className="App">
      <Header />
      <MemeRoyalty />
      <div className="container">
      {
          !this.state.loading
        }
      <div className="container">
      <div className="row">
      {
        this.state.memes.map((meme) => (<Image 
        key={meme.id} 
        meme={meme} 
        editMeme={this.editMeme}
        updateMemes={this.updateMemes}
        updateMeme={this.updateMeme}
        currentMeme={this.state.currentMeme}
        upVote={this.upVote}
        downVote={this.downVote}
        apiPatch={this.apiPatch}
        />))
      }
      </div>
      </div>
      <div className="container">
      <div className="row justify-content-center">
      <UrlMeme currentMeme={this.state.currentMeme} 
               updateMemes={this.updateMemes}
               updateMeme={this.updateMeme}
               editing={this.state.editing}
               apiPatch={this.apiPatch}
               stopEdit={this.stopEdit}
               />
      </div>
      </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
