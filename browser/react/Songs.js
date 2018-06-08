import React, { Component } from 'react'
import axios from 'axios'

export const Songs = ({ albumSongs, play }) => {
  // const { albumSongs, play } = props
    return(
      <tbody>
      {
        albumSongs.map(song => {
          return (
            <tr key={song.id}>
              <td>
                <button className="btn btn-default btn-xs" >
                  <span className="glyphicon glyphicon-play" onClick={() => play(song.audioUrl)}></span>
                </button>
              </td>
              <td>{song.name}</td>
              {
                song.artists.map(artist => {
                  return (
                    <td key={artist.id}>{artist.name}</td>
                  )
                })
              }
              <td>{song.genre}</td>
            </tr>
          )
        })
      }
      </tbody>
    )
  
}