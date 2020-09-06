import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import { VisibilityControl } from "./VisibilityControl";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: "Your",
      todoItems: [{action: "do this", done: false},
                  {action: "do that", done: true},
                  {action: "do that again", done: false}],
      showCompleted: true
    }
  }

  updateNewTextValue = (event) =>{
    this.setState({newItem: event.target.value});
  }

  createNewTodo = (task) => {
    if(!this.state.todoItems.find(item => item.action === task)){
        this.setState({
          todoItems: [...this.state.todoItems, 
          {action: task, done: false}]
        })
      }
  }

  toggleTodo = (todo) => this.setState({todoItems: 
    this.state.todoItems.map(item => item.action === todo.action 
      ? {...item, done: !item.done} : item)});

  todoTableRows = (doneValue) => this.state.todoItems
    .filter(item => item.done === doneValue).map(item=> 
    <TodoRow key={item.action} item={item} callback={this.toggleTodo}/>
    );

  clearAll = () =>
    this.setState({todoItems: []})

  render(){
    return(
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />    
        <div className="container-fluid">
            <TodoCreator callback={this.createNewTodo} clearCallBack={this.clearAll}/>            
            <table className="table table-striped table-bordered">
              <thead>
                <tr><th>Description</th><th>Done</th></tr>
              </thead>
              <tbody>{this.todoTableRows(false)}</tbody>
              <tbody>{this.todoTableRows()}</tbody>
            </table>
            <div className="bg-secondary text-white text-center p-2">
              <VisibilityControl description= "Completed Tasks"
                isChecked={this.state.showCompleted}
                callback={(checked) => this.setState({showCompleted:checked})} />
            </div>

            {this.state.showCompleted &&
              <table className="table table-striped table-bordered">
                <thead>
                  <tr><th>Description</th><th>Done</th></tr>
                </thead>
                <tbody>{this.todoTableRows(true)}</tbody>
                </table>}
        </div>
      </div>
    )
  };
}

export default App;
