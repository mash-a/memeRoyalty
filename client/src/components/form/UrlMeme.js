import React, { Component } from "react";

class UrlMeme extends Component {
    render() {
        return (
            <div>
                <form className="form">
                <input 
                    className="form-control"
                    type="text"
                    name="url"
                    placeholder="meme URL"
                    required
                />
                <input 
                    className="form-control"
                    type="text"
                    name="tagString"
                    placeholder="tags"
                    required
                />
                </form>
            </div>     
        )
    }
        
}

export default UrlMeme;