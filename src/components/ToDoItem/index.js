import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const {todo, id, handleTodoDelete, handleEditButton } = this.props;
        console.log(id, 'Where is this');
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                {todo}
                <div className="todo-icons">
                    <span onClick={ () => handleEditButton(id) } className ="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span onClick={ () => handleTodoDelete(id) } className ="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default ToDoItem;