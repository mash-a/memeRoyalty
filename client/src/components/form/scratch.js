apiPatch = () => {
    const {id, url, tagString, votes} = this.props.currentMeme
    console.log(this.props.currentMeme)
    axios.patch(`/api/memeges/${id}`, {url, tagString, votes}) 
    .then((result) => {
        this.props.updateMemes(result.data)
    })
}