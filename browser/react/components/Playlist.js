import React, { Component } from 'react'
import axios from 'axios'

export default class Playlist extends Component {
  constructor(){
    super()
    this.state = {
      playlist : []
    }
  }

  componentDidMount(){
    this.getPlaylist(this.props.match.params.playlistId)
  }

  getPlaylist = (playlistId) => {
    axios.get(`/api/playlists/${playlistId}`)
    .then(res => this.setState({ playlist : res.data }))
    .catch(err => console.error(`Unable to retrieve playlist ${err}`))
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.playlistId !== nextProps.match.params.playlistId){
      this.getPlaylist(nextProps.match.params.playlistId)
    }
  }

  render(){
    const { playlist } = this.state
    console.log('playlist', playlist)
    return(
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    )
  }
}