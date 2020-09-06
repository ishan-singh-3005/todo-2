import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

export class TodoCreator extends Component {
    constructor(props){
        super(props);
        this.state = {
            newItemText: ""
        }
    }

    updateNewTextValue = (event) =>{
        this.setState({newItemText: event.target.value});
      }
    
    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText:""});
    }

      render (){
        return(
            <div className="my-1">
            <input className="form-control" value={this.state.newItemText}
                onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1 mb-4" 
                onClick={this.createNewTodo}
                data-tut="addTask">Add</button>
            <button className="btn btn-sm btn-danger mb-3 ml-5"
                onClick={this.props.clearCallBack}
                data-tut="clearAll">Clear All</button>            
        </div>
        )
    };
}