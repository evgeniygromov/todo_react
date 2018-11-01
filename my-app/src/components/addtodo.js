import React, {Component} from 'react';
import './App.css';
import Li from './li.js';

class AddTodo extends Component {
    state = {
        name: 'add task',
        todoList: ['fdfffl', 'ffff', 'jdnkjfnm ambc ma s acma c ca camcamcamcammamcmacc a ca ac', 'fdnmddmdmdmdmdmd'],

    }

    updateData = () => {

        this.setState({
            name: (this.state.name === 'add task') ? "another!" : "add task"
        })

    }

    render() {
        const { todoList, name } = this.state;

        const todoLists = todoList.map((item, index) => <Li toDoField={item} index={index} />)
        return (
            <div>
                <div className={'inputContainer'}>
                    <label>
                        <input className="checkbox" type="checkbox" name="checkbox-test"></input>
                        <span className="checkbox-custom"></span>
                    </label>
                    <input className={'inputArea'} placeholder={'Add your task'}></input>
                    <button className="submit"
                            onClick={() => {
                                this.updateData()
                            }}>
                        {name}

                    </button>

                </div>

                <div className="todoContainer">
                    <div className="todoBlock">
                        {todoLists}
                    </div>
                </div>
            </div>
        );
    }

}


export default AddTodo;