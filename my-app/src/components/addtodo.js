import React, {Component} from 'react';
import './App.css';


class AddTodo extends Component {
    state = {
        name: 'add task',
    }

    updateData = () => {

        this.setState ({
            name: (this.state.name === 'add task') ? "another!" : "add task"
        })

    }

    render() {
        return (
            <div className={'inputContainer'}>
                <label>
                    <input className="checkbox" type="checkbox" name="checkbox-test"></input>
                    <span className="checkbox-custom"></span>
                </label>
                <input className={'inputArea'} placeholder={'Add your task'}></input>
                <button  className="submit"
                         onClick={() => {this.updateData()}}   >
                    {this.state.name}

                </button>
            </div>
        );
    }

}


export default AddTodo;