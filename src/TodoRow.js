import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SimpleMenu from './SimpleMenu';

export class TodoRow extends Component {
    
    render (){
        return(
            <tr>
                <td>
                    {this.props.item.action} <br/>
                    <SimpleMenu/>                  
                </td>
                <td>
                    <input type="checkbox" checked= {this.props.item.done}
                    onChange= {() => this.props.callback(this.props.item)}
                    data-tut="doneTask"/>
                </td>
             </tr>
        )
    };
        
}