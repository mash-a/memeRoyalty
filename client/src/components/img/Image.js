import React, { Component } from "react";
import './Image.css';

class Image extends Component {
    
    onDelete = (id) => {
        
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
                <p>Delete</p>
            </div> 
        )
    }
}

export default Image;