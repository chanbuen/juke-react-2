import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllArtists extends Component {
  constructor(){
    super()
    this.state = {
      artists: []
    }
  }

  componentDidMount(){
    axios.get(`/api/artists`)
      .then(res => {
        console.log('artist data,', res.data)
        this.setState({ artists : res.data})
      })
      .catch(err => {
        console.error(`Unable to retrieve all artists ${err}`)
      })
  }
  render(){
    const { artists } = this.state
    return(
      <div>
        <h3>Artists</h3>
          <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  {/* determine where to actually Link to later! */}
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>   
                </div>
              )    
            })
          }
        </div>
      </div>
    )
  }
}