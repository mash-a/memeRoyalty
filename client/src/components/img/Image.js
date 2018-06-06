import React, { Component } from "react";
import './Image.css';
import axios from 'axios';

class Image extends Component {

    // onClick = () => {
        
    // }
    
    onDelete = (id) => {
       axios.delete(`/api/memeges/${id}`)
       .then((result) => {
           this.props.updateMemes(result.data)
       }) 
    }

    vote = async (e, id) => {
        e.persist();
        await this.props.editMeme(id);
        await e.target.id === "Vote-Up" ? this.props.upVote() : this.props.downVote();
        this.props.apiPatch();
    }

    // votePatch = (id) => {
    //     const {votes} = this.props.currentMeme;
    //     axios.patch(`/api/memeges/${id}`, {votes})
    //     .then((result) => {
    //         console.log(result.data)
    //         this.props.updateMemes(result.data)
    //     })
    // }

    render() {
        const {id, url, tagString, votes} = this.props.meme;
        return (
            <div>
                <img src={url} alt="" className="img-responsive"/>
                <span className="glyphicon glyphicon-triangle-top Vote-Up"
                id="Vote-Up"
                onClick={(e) => this.vote(e, id)}
                />
                <p>tags: {tagString} | votes: {votes}</p>
                <span className="glyphicon glyphicon-triangle-bottom Vote-Down"
                id="Vote-Down"
                onClick={(e) => this.vote(e, id)}
                />
                <p onClick={() => this.props.editMeme(id)}>Edit</p>
                <p onClick={() => this.onDelete(id)}>Delete</p>
            </div> 
        )
    }
}

export default Image;