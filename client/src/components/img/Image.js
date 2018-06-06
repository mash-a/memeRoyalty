import React, { Component } from "react";
import './Image.css';
import axios from 'axios';

class Image extends Component {
    
    onDelete = (id) => {
       axios.delete(`/api/memeges/${id}`)
       .then((result) => {
           this.props.updateMemes(result.data)
       }) 
    }

    render() {
        const {id, url, tagString, votes} = this.props.meme;
        return (
            <div>
                <img src={url} alt="" className="img-responsive"/>
                <span className="glyphicon glyphicon-triangle-top Vote-Up"/>
                <p>tags: {tagString} | votes: {votes}</p>
                <span className="glyphicon glyphicon-triangle-bottom Vote-Down"/>
                <p onClick={() => this.props.editMeme(id)}>Edit</p>
                <p onClick={() => this.onDelete(id)}>Delete</p>
            </div> 
        )
    }
}

export default Image;