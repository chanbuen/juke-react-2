import React, { Component } from 'react'
import axios from 'axios'
import Songs from './Songs'

export default class SingleAlbum extends Component {
  constructor(){
    super()

  }

  render(){
    console.log('this.props', this.props)
    console.log('this.props.album.length', !Object.keys(this.props.album).length)
    if (!Object.keys(this.props.album).length) {
      return null
    }
    const { album, play } = this.props
    return(
      <div className="album col-xs-10">
        <div>
          <h3>{album.name}</h3>
          <img src={album.imageUrl} className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <Songs play={this.props.play} albumSongs={album.songs}/>
        </table>
      </div>
    )
  }
}