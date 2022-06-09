import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Brown', salary: 800, increase: false, rise: true, id: 1},
                {name: 'David Smith', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Michael Cornel', salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState( ({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
        
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }

        this.setState( ({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }
    
    onToggleIncrease = (id) => {
        this.setState( ({data}) => {
            const index = data.findIndex(item => item.id === id);
            const objBeforeChange = data[index];

            const newObj = {...objBeforeChange, increase: !objBeforeChange.increase};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]; // до нового объекта + новый объект + после

            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        this.setState( ({data}) => {
            const index = data.findIndex(item => item.id === id);
            const objBeforeChange = data[index];

            const newObj = {...objBeforeChange, rise: !objBeforeChange.rise};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]; // до нового объекта + новый объект + после

            return {
                data: newArr
            }
        })
    }
 
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                employees = {employees}
                increased = {increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                data = {this.state.data}
                onDelete = {this.deleteItem}
                onToggleIncrease = {this.onToggleIncrease}
                onToggleRise = {this.onToggleRise}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
    
}

export default App;