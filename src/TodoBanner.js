import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tour from 'reactour'

export class TodoBanner extends Component {

    constructor(props){
        super(props);
        this.state = {
            isTourOpen: false
        }
    }

    tourTrigger = () =>
        this.setState({isTourOpen: true})

    closeTour = () =>
        this.setState({isTourOpen: false})

  render (){
    if(this.props.tasks.filter(t => !t.done).length > 10){
      return(        
        <div>
              <h4 className="bg-danger text-white text-center p-4">
                  {this.props.name} Todo List
                  ({this.props.tasks.filter(t => !t.done).length} items to do)
                 
                  <IconButton onClick={this.tourTrigger}>
                      <InfoOutlinedIcon/>
                  </IconButton>
              </h4>               
          
              <Tour
                  steps={steps}
                  isOpen={this.state.isTourOpen}
                  onRequestClose={this.closeTour} />
        </div>  
      
    )
      }else if(this.props.tasks.filter(t => !t.done).length <= 10 && this.props.tasks.filter(t => !t.done).length > 0) {
        return(        
          <div>
                <h4 className="bg-warning text-white text-center p-4">
                    {this.props.name} Todo List
                    ({this.props.tasks.filter(t => !t.done).length} items to do)
                   
                    <IconButton onClick={this.tourTrigger}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </h4>               
            
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour} />
          </div>
        
      )
      }else{
        return(        
          <div>
                <h4 className="bg-success text-white text-center p-4">
                    {this.props.name} Todo List
                    ({this.props.tasks.filter(t => !t.done).length} items to do)
                   
                    <IconButton onClick={this.tourTrigger}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </h4>               
            
                <Tour
                    steps={steps}
                    isOpen={this.state.isTourOpen}
                    onRequestClose={this.closeTour} />
          </div>
        
      )
      }
}; 
}    

const steps = [
    {
        content: 'Welcome to my task manager',
    },
    {
      selector: '[data-tut="addTask"]',
      content: 'Write a task in the box above and click this to add the task',
    },
    {
      selector: '[data-tut="clearAll"]',
      content: 'Clear all you tasks, done and not done',
    },
    {
      selector: '[data-tut="tag"]',
      content: 'Add priority tags to you tasks using this',
    },
    {
      selector: '[data-tut="doneTask"]',
      content: 'Check this box to send task to completed section',
    },
    {
      selector: '[data-tut="toggleDone"]',
      content: 'Choose to see your completed tasks',
    },
    {
      content: 'Thank you for touring the app',
    }
    
  ]