import React, { Component } from 'react'
import TodoItem from '../ToDoItem';

class ToDoList extends Component {
    render() {

        const {todoItems, clearTodoListOnClick} = this.props;

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo's</h3>
                
                {todoItems.map( item => {
                    return(
                        <TodoItem key={item.id} todo={item.todo}/>
                    );
                })}
                
                <button onClick={clearTodoListOnClick} type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
            </ul>  
        )
    }
}

export default ToDoList;
