import React, {Component} from 'react';

class Li extends Component {


    deleteTask = (e) => {
        console.log('ddd');
this.props.deleteItem(e.target.id);


    }


    checkboxChange =  (e) => {
    this.props.check(e.target.id);
}


    render() {
        console.log('сука');
        // const {arr} = this.props;
        const {toDoField} = this.props;

        return (

            <div className={'listLi'}>
                <label>
                    <input className="checkbox" type="checkbox" name="checkbox-test" onChange={this.checkboxChange}></input>
                    <span className="checkbox-customList"></span>
                </label>
                <p>{toDoField}</p>
                <button id={this.props.id} onClick={this.deleteTask}>Delete</button>
            </div>)
    }
}

export default Li;