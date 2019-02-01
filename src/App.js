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

  handleTodoDelete = (id) => {
    console.log(`The item with id of ${id} is marked for deletion.`);
    
    const fillteredTodoItems = this.state.todoItems.filter( ( item ) => item.id !== id );

    this.setState({
      todoItems: fillteredTodoItems
    })

  }

  clearTodoListOnClick = () => {
    console.log("Button Clicked");
    this.setState({
      todoItems: []
    });
  }

  handleEditButton = (id) => {
    console.log("edit icon clicked");

    const fillteredTodoItems = this.state.todoItems.filter( ( item ) => item.id !== id );

    const selectedItem = this.state.todoItems.find( (item) => item.id === id );
    console.log(selectedItem, "From selected Item")
    
    this.setState({
      todoItems: fillteredTodoItems,
      todo: selectedItem.todo,
      editItem: true,
      id: id,
    })

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
              editItem={this.state.editItem}
            />
            <ToDoList 
              todoItems={this.state.todoItems} 
              clearTodoListOnClick={this.clearTodoListOnClick}
              handleTodoDelete={this.handleTodoDelete}
              handleEditButton={this.handleEditButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
