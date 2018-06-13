import React, { Component } from 'react'
import axios from 'axios'
import { Link , Route } from 'react-router-dom'
import AllAlbums from './AllAlbums'
import Songs from './Songs'

export default class SingleArtist extends Component {
  constructor(){
    super()
    this.state = {
      artist : {}
    }
  }

  componentDidMount(){
    let artist = axios.get(`/api/artists/${this.props.match.params.artistId}`)
    let albums = axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
    let songs = axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
    Promise.all([artist, albums, songs])
      .then(res => {
        let artist = res[0].data
        artist.albums = res[1].data
        artist.songs = res[2].data
        return this.setState({ artist })
      })
      .catch(err => {
        console.error(`Unable to retrieve single artists ${err}`)
      })
  }

  render(){
    console.log('this.props', this.props)
    console.log('this.state.artist', this.state.artist)
    const { artist } = this.state
    return(
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        <Route path="/artists/:artistId/albums" render={() => <AllAlbums albums={artist.albums}/>} />
        <Route path="/artists/:artistId/songs" render={() => <Songs songs={artist.songs}/>} />
        {/* Routes will go here! */}
      </div>
    )
  }
}