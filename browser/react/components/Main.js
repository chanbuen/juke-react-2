import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlaylist from './NewPlaylist';
import axios from 'axios'
import Playlist from './Playlist';

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      playlists : [],
      input : '',
    }
  }

  componentDidMount(){
    axios.get(`/api/playlists`)
      .then(res => this.setState({ playlists: res.data }))
      .catch(err => console.error(`Unable to get playlists ${err}`))
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`/api/playlists`, { name : this.state.input })
      .then(res => {
        console.log('create playlist res', res.data)
        this.setState({ playlists : [...this.state.playlists, res.data]})
      })
      .catch(err => {
        console.error(`Unable to create playlist ${err}`)
      })
    this.setState( { input : '' })
  }

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route path="/playlist/:playlistId" component={Playlist}/>
              <Route path="/new-playlist" render={() => <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.input}/>} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
