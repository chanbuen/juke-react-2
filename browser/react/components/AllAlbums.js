import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllAlbums extends Component {
  constructor(){
    super()

  }

  render () {
    const { albums } = this.props;
    console.log('this.props', this.props)
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums && albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
            <Link to={`/albums/${album.id}`} >
              {/* react only solution <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}> */}
                <img src={ album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              {/* </a> */}
            </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
