import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      initialRequestComplete: true,
      albums: [],
      selectedAlbum : {},
      selectedSong : {},
    }
    // this.handleClick = this.handleClick.bind(this)
    // this.handleDeleteSelectedAlbum = this.handleDeleteSelectedAlbum.bind(this)
  }

  componentDidMount(){
    axios.get('/api/albums')
      .then(response => {
        return this.setState({ albums : response.data})
      })
      .then(done => {
        this.setState({ initialRequestComplete : false })
      })
      .catch(error => {
        console.error(`Unable to get album data ${error}`)
      })
  }

  handleClick = (albumId) => {
    axios.get(`/api/albums/${albumId}`)
      .then(res => {
        return this.setState({ selectedAlbum : res.data })
      })
      .catch(error => console.error(`Unable to retrieve selected album ${error}`))
  }

  // handleDeleteSelectedAlbum(){
  //   this.setState({ selectedAlbum : {} })
  // }

  handleDeleteSelectedAlbum = () =>
    this.setState({ selectedAlbum : {} })

  handleSelectedSong = (song) =>
    this.setState({ selectedSong : song })

  handlePlay = (src) => {
    let audio = new Audio(src)
    audio.load()
    audio.play()
  }

  render(){
    console.log('this.state', this.state)
    // if (this.state.initialRequestComplete) {
    //   return null
    // }
    return (
      <div id="main" className="container-fluid">
        <Sidebar clearAlbum={this.handleDeleteSelectedAlbum}/>
        {
          this.state.selectedAlbum.id
          ? <SingleAlbum album={this.state.selectedAlbum} play={this.handlePlay}/>
          : <AllAlbums albums={this.state.albums} handleClick={this.handleClick}/>
        }
        <Footer/>
      </div>    
    )
  }
}