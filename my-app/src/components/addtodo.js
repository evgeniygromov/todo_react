import React, {Component} from 'react';
import './App.css';
import Li from './li.js';

class AddTodo extends Component {

    state = {
        name: 'add task',
        status: false,
        arr: [],
        id: 1,
        values: "",
        // arrs: {},
    }


    deleteItem = (id) => {

        this.setState({
            arr: this.state.arr.filter(el => el.id !== +id)
        })
    }

    checkBox = (id) => {

        const toDoObj = this.state.arr.find(el => el.id !== +id);
        console.log(this.state.arr.id);
       console.log('----------toDoObj:', toDoObj);
    }

    updateData = () => {
        const {arr} = this.state;

        this.setState({
            // arr: arr,
            id: this.state.id + 1,
        })

        const toDo = {
            value: this.textInput.value,
            status: this.state.status,
            id: this.state.id,
            key: this.state.id,


        };

        // const newToDo = this.textInput.value;

        arr.push(toDo);
        console.log(arr);
        // this.textInput.value = "";
    }


    getTodoLists = () => {
        const {arr} = this.state;

        return arr.map((el) => <Li {...el}
                                   toDoField={this.textInput.value}
                                   arr={arr}
                                   deleteItem={this.deleteItem}
                                   checkBox={this.checkBox}></Li>);
    }


    render() {


        return (
            <div>
                <div className={'inputContainer'}>
                    <label>
                        <input className="checkbox" type="checkbox" name="checkbox-test"/>
                        <span className="checkbox-custom" c></span>
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