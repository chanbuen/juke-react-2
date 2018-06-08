import React, { Component } from 'react'

export default class AllAlbums extends Component {
  constructor(){
    super()
  }
  render(){
    const { albums, handleClick } = this.props
    return(
      <div className="col-xs-10">
      {
        albums.map((album, idx) => {
          return (
            <div className="col-xs-4" key={`${album.name}, ${idx}`}>
              <a className="thumbnail" href="#" onClick={() => handleClick(album.id)}>
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>{album.songs.length}</small>
                </div>
              </a>
            </div>
          )
        })
      }
      </div>
    )
  }
}