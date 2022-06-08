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
                {name: 'John Brown', salary: 800, increase: false, like: true, id: 1},
                {name: 'David Smith', salary: 3000, increase: true, like: false, id: 2},
                {name: 'Michael Cornel', salary: 5000, increase: false, like: false, id: 3}
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
        console.log(`Increase ${id}`);
    }

    onToggleLike = (id) => {
        console.log(`Like ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                data = {this.state.data}
                onDelete = {this.deleteItem}
                onToggleIncrease = {this.onToggleIncrease}
                onToggleLike = {this.onToggleLike}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
    
}

export default App;