import React, { Component } from "react";
import './Images.css';
import Image from '../img/Image';

class Images extends Component {
    render() {
        const {memes} = this.props
        return (
            <div>
                {memes.map(meme => (<Image key={meme.id} meme={meme} editMeme={this.props.editMeme}/>))}
            </div>
        )
    }
}

export default Images;