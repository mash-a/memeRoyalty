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

    //e.persist() basically forces the event target to stay there
    //and await for the async functionality
    //needed the async function so that the function would wait 
    //for the state to be updated and then to take that information
    //to do the apiPatch()
    vote = async (e, id) => {
        e.persist();
        await this.props.editMeme(id);
        await e.target.id === "Vote-Up" ? this.props.upVote() : this.props.downVote();
        this.props.apiPatch();
    }

    render() {
        const {id, url, tagString, votes} = this.props.meme;
        return (
            <div>
                <img src={url} alt="" className=""/>
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