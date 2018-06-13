import React, { Component } from 'react'

export default class NewPlaylist extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    let inputGreaterThanZero = this.props.input.length > 0
    let inputMeetsLength = this.props.input.length < 17
    let condition = inputGreaterThanZero && inputMeetsLength
    
    return(
      <div className="well">
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder={'Please enter a name'} name="input" onChange={this.props.handleChange} value={this.props.input}/>
                {
                  inputGreaterThanZero
                  ? inputMeetsLength
                  ? null
                  : <div className="alert alert-warning">Input should be less than 17 characters</div>
                  : <div className="alert alert-warning">Please enter a name</div>
                }
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={!condition}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}