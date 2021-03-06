import React, { Component } from "react";
import axios from 'axios';
import './UrlMeme.css'
import { Card, CardBody} from 'reactstrap';
class UrlMeme extends Component {
    static defaultProps = {votes: "0"}
    onSubmit = e => {
        e.preventDefault();
        this.props.editing ? this.props.apiPatch() : this.apiPost()
    }
   
    apiPost = () => {
        const {title, url, tagString} = this.props.currentMeme
        const {votes} = UrlMeme.defaultProps;
        axios.post('/api/memeges', {title, url, tagString, votes})
            .then((result) => {
                this.props.updateMemes(result.data)
            })
    }

    onChange = e => {this.props.updateMeme(e.target.name, e.target.value)}

    render() {
        const {title, url, tagString} = this.props.currentMeme
        return (
            <Card id="form">
            <CardBody>
                <form className="form" onSubmit={this.onSubmit}>
                <input 
                    required
                    className="form-control"
                    type="text"
                    name="url"
                    placeholder="Meme Url"
                    onChange={this.onChange}
                    value={url}
                />
                <input 
                    required
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Meme Title"
                    onChange={this.onChange}
                    value={title}
                />
                <input 
                    required
                    className="form-control"
                    type="text"
                    name="tagString"
                    placeholder="tags"
                    onChange={this.onChange}
                    value={tagString}
                />
                <button className="btn btn-dark">
                {this.props.editing ? "Edit Meme" : "Add Meme"}
                </button>
               {
                   this.props.editing &&
                   <button className="btn btn-dark" 
                   value="cancel"
                   onClick={this.props.stopEdit}
                   >Nevah Mind</button>
               }
                </form>
            </CardBody>
            </Card>     
        )
    }
        
}

export default UrlMeme;