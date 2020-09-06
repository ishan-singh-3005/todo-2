import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export class VisibilityControl extends Component {

  render (){
      return(
          <div className="form-check">
            <input className="form-check-input" type="checkbox"
                checked={this.props.isChecked}
                onChange={ (e) => this.props.callback(e.target.checked)}
                data-tut="toggleDone" />
            <label className="form-check-label">
                Show {this.props.description}
            </label>
          </div>
      )
  };
}