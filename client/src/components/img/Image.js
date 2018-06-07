import React, { Component } from "react";
import './Image.css';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

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
        const {id, url, tagString, votes, title} = this.props.meme;
        return (
            <div>
            <Card>
                <a href={url} target="_blank">
                <CardImg src={url} alt={id} top width="100%"/>
                </a>
                <CardTitle>{title}</CardTitle>
                <CardBody>
                <i className="fas fa-caret-up"
                id="Vote-Up"
                onClick={(e) => this.vote(e, id)}
                ></i>
                <small>votes: {votes} </small>
                <i className="fas fa-caret-down"
                id="Vote-Down"
                onClick={(e) => this.vote(e, id)}
                ></i>
                <CardText>
                <span onClick={() => this.props.editMeme(id)}>Edit</span>
                <br />
                <span onClick={() => this.onDelete(id)}>Delete</span>
                <br />
                <small>tags: {tagString} </small>
                </CardText>
                </CardBody>
            </Card>
            </div> 
        )
    }
}

export default Image;