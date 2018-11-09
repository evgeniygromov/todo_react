import React, {Component} from 'react';

class Li extends Component {
    deleteTask = (e) => {
        this.props.deleteItem(e.target.id);
    }


    checkboxChange = (e) => {
        this.props.checkBox(e.target.id);
    }


    render() {
        const {value, id, status} = this.props;
        return (
            <div className={'listLi'}>
                <label>
                    <input id={id} className="checkbox" type="checkbox" name="checkbox-test"
                           onChange={this.checkboxChange}></input>
                    <span className="checkbox-customList"></span>
                </label>
                <div className={status ? "p2" : "p1"}>{value}</div>
                <button id={id} className={"deleteTaskButton"} onClick={this.deleteTask}>X</button>
            </div>)
    }
}

export default Li;