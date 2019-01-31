import React, { Component } from 'react';

class ToDoInput extends Component {
    render() {

        const {getFormInput, addInputToListOnSubmit, todo} = this.props;
        
        return(
            <div onSubmit={addInputToListOnSubmit} className="card card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book">

                                </i>
                            </div>
                        </div>
                        <input onChange={getFormInput} type="text" value={todo} className="form-control text-capitalize" placeholder="add a todo item..." />
                    </div>
                    <button className="btn btn-block btn-primary mt-3" type="submit">Add A Todo</button>
                </form>
            </div>
        );
    }
}

export default ToDoInput;