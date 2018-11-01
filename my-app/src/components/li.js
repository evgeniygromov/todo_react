import React, {Component} from 'react';

class Li extends Component {
    render () {
        const { toDoField, index } = this.props;
        return (
            <div className={'listLi'} key={index}>
                <label>
                    <input className="checkbox" type="checkbox" name="checkbox-test"></input>
                    <span className="checkbox-customList"></span>
                </label>
            <p>{toDoField}</p>
            <button>ok</button>
        </div>)
    }
}

export default Li;