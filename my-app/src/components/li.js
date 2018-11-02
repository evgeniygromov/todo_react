import React, {Component} from 'react';

class Li extends Component {


    // deleteTask = () => {
    //
    //     console.log('ddd');
    // }


    render () {

            const { toDoField } = this.props;
        return (
            <div className={'listLi'} >
                <label>
                    <input className="checkbox" type="checkbox" name="checkbox-test"></input>
                    <span className="checkbox-customList"></span>
                </label>
            <p>{toDoField}</p>
            <button>Delete</button>
        </div>)
    }
}

export default Li;