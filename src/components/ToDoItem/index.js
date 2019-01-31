import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const {todo} = this.props;
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                {todo}
                <div className="todo-icons">
                    <span className ="mx-2 text-success">
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className ="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        );
    }
}

export default ToDoItem;