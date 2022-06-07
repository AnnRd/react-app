import { Component } from 'react';

import './employees-list-item.css';

//для каждого отдельного сотрудника
class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        };
    }

    onIncrease = () => {
        this.setState( ({increase}) => ({ //деструктуризация increase из state вместо stateв аргументах и state.increase в объекте
            increase: !increase
        }))
    };

    onLike = () => {
        this.setState( ({like}) => ({ //деструктуризация like из state
            like: !like
        }))
    };

    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';

        if (increase) {
            classNames += ' increase';
        };

        if (like) {
            classNames += ' like';
        };

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
    )
    }
}

export default EmployeesListItem;
