import React, {Component} from 'react';

import './App.css';


class TodoBlock extends Component {
    state = {
        todoList: ['fdfffl', 'ffff', 'jdnkjfnm ambc ma s acma c ca camcamcamcammamcmacc a ca ac', 'fdnmddmdmdmdmdmd'],
    }

    todoList2 = this.state.todoList.map((item, index) => {
        return <div className={'listLi'} key={index}>{item}</div>;
    });

    render() {

        return (
            <div className="todoContainer">
                <div className="todoBlock">
                       {this.todoList2}
                </div>
            </div>
        )
    }
}

export default TodoBlock;