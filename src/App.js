import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

class App extends Component {

  state = {
    todo: '',
    id: uuid(),
    todoItems: [],
    editItem: false
  }

  getFormInput = (e) => {
    const input = e.target.value;
    console.log(input);
    this.setState({
      todo: input
    });
  }

  addInputToListOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const newTodo = {
      id: this.state.id,
      todo: this.state.todo,
    }

    console.log(newTodo);

    const updatedTodoList = [...this.state.todoItems, newTodo];
    
    this.setState({
      todoItems: updatedTodoList,
      todo: '',
      id: uuid(),
      editItem: false
    });
    console.log(updatedTodoList);
  }

  clearTodoListOnClick = () => {
    console.log("Button Clicked");
    this.setState({
      todoItems: []
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">React Todo App</h3>
            <ToDoInput
              todo={this.state.todo} 
              getFormInput={this.getFormInput}
              addInputToListOnSubmit={this.addInputToListOnSubmit}
            />
            <ToDoList 
              todoItems={this.state.todoItems} 
              clearTodoListOnClick={this.clearTodoListOnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
