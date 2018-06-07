apiPatch = () => {
    const {id, url, tagString, votes} = this.props.currentMeme
    console.log(this.props.currentMeme)
    axios.patch(`/api/memeges/${id}`, {url, tagString, votes}) 
    .then((result) => {
        this.props.updateMemes(result.data)
    })
}

.Image {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 1em;
    margin: .5em;
    float: left;
    overflow: scroll;
  }
  
.Vote-Up {
    color: red;
    cursor: pointer;
    float: left;
  }
  
.Vote-Down {
    padding: 1em;
    color: black;
    cursor: pointer;
  }