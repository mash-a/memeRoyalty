import React, { Component } from "react";
import './Image.css';

class Image extends Component {
    render() {
        const {url, tagString, votes} = this.props.meme;
        return (
            <div>
                <img src={url} alt="" className="img-responsive"/>
                <span className="glyphicon glyphicon-triangle-top Vote-Up"/>
                <p>tags: {tagString} | votes: {votes}</p>
                <span className="glyphicon glyphicon-triangle-bottom Vote-Down"/>
            </div> 
        )
    }
}

export default Image;