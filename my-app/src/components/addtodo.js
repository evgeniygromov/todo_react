import React, {Component} from 'react';
import './App.css';
import Li from './li.js';

class AddTodo extends Component {

    state = {
        name: 'add task',
        status: false,
        arr: [],
        id: 0,
    }

    updateData = () => {
        const {arr} = this.state;

        const newToDo = this.textInput.value;

        arr.push(newToDo);

        this.setState({
            arr: arr,
            id: this.id+1,
        })
        this.textInput.value = null;
    }





    getTodoLists = () => {
        const {arr} = this.state;

        return arr.map((value, index) => <Li toDoField={value} index={index} key={index}  ></Li>);
    }



    render() {




        return (
            <div>
                <div className={'inputContainer'}>
                    <label>
                        <input className="checkbox" type="checkbox" name="checkbox-test"/>
                        <span className="checkbox-custom"></span>
                    </label>
                    < input className={'inputArea'} type={'text'} placeholder={'Add your task'}
                            ref={(input) => {
                                this.textInput = input;
                            }}/>
                    <button className="submit"
                            onClick={() => {
                                this.updateData()
                            }}>
                        {this.state.name}

                    </button>

                </div>

                <div className="todoContainer">
                    <div className="todoBlock">


                        {this.getTodoLists()}


                    </div>
                </div>
            </div>
        );
    }

}


export default AddTodo;