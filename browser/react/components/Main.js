import React, { Component } from 'react';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom'
import AllArtists from './AllArtists'
import SingleArtist from './SingleArtist'
import StatefulAlbums from './StatefulAlbums'


export default class Main extends Component {

  constructor (props) {
    super(props);
    // this.state = {
    //   album: {}
    //   selectedAlbum: {}
    // };
    // this.selectAlbum = this.selectAlbum.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  // selectAlbum (albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }

  // deselectAlbum () {
  //   this.setState({ selectedAlbum: {}});
  // }

  render () {
    return (
      <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
          <div className="col-xs-10">
          <Route path="/artists/:artistId" component={SingleArtist} />
          <Route exact path="/artists" component={AllArtists} />
          <Route path="/albums/:albumId" component={SingleAlbum} />
          <Route exact path="/albums" component={StatefulAlbums}/>
          <Route exact path="/" component={StatefulAlbums} />
          {/* {
            this.state.selectedAlbum.id ?
            <SingleAlbum album={this.state.selectedAlbum} /> :
            <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
          } */}
          </div>
        <Player />
      </div>
      </HashRouter>
    );
  }
}
