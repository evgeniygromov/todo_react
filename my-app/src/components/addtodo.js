import React, {Component} from 'react';
import './App.css';
import Li from './li.js';

class AddTodo extends Component {

    state = {
        name: 'add task',
        arr: [],
        id: 1,
        checked: [],
    }

    deleteItem = (id) => {
        this.setState({
            arr: this.state.arr.filter(el => el.id !== +id)
        })
    }

    checkBox = (id) => {
        const array = this.state.arr;
        array.find(el => el.id === +id).status = !array.find(el => el.id === +id).status;
        this.setState({
            arr: array,
        })
    }

    updateData = () => {
        this.textInput.value = this.textInput.value.trim();
        if (this.textInput.value !== "") {
            const {arr} = this.state;
            this.setState({
                id: this.state.id + 1,
            })

            const toDo = {
                value: this.textInput.value,
                id: this.state.id,
                key: this.state.id,
                status: true,
            };

            arr.push(toDo);
            this.textInput.value = "";
        }
    }

    getTodoLists = () => {
        const {arr} = this.state;

        return arr.map((el) => {
            return <Li {...el}
                       deleteItem={this.deleteItem}
                       checkBox={this.checkBox}></Li>
        });
    }

    keyPress = (e) => {
        if (e.charCode === 13) {
            this.updateData();
        }
    }

    allCheckboxChange = () => {
        this.state.arr.status = !this.state.arr.status;
        // this.setState({
        //     status: false,
        // })
       // this.state.arr.status = !this.state.arr.status;
       console.log(this.state.status);

    }


    clearAll = () => {
        this.setState({
            arr: [],
        })
    }


    render() {
        const completeCounts = this.state.arr.filter(el => el.status === false).length;
        const notCompleteCounts = this.state.arr.filter(el => el.status === true).length;
        const AllCounts = this.state.arr.length;

        return (
            <div>
                <div
                    className="completeBlock">   {`All: ${AllCounts} || Complete: ${completeCounts} ||
                    Not complete: ${notCompleteCounts}`} </div>

                <div className="inputContainer">
                    <button className={"clearAll"}  onClick={this.clearAll}>Clear<br/> All</button>
                    <label>
                        <input className="checkbox" type="checkbox" name="checkbox-test"
                               onChange={this.allCheckboxChange}/>
                        <span className="checkbox-custom">Check <br/>All</span>
                    </label>
                    < input className={'inputArea'} type={'text'} placeholder={'Add your task'}
                            ref={(input) => {
                                this.textInput = input;
                            }}
                            onKeyPress={this.keyPress}/>
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