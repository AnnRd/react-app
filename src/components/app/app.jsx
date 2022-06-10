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
            ],
            term: '',
            filter: 'all'
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
    
    onToggleProp = (id, prop) => {
        this.setState( ({data}) => {
            const index = data.findIndex(item => item.id === id);
            const objBeforeChange = data[index];

            const newObj = {...objBeforeChange, [prop]: !objBeforeChange[prop]};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]; // до нового объекта + новый объект + после

            return {
                data: newArr
            }
        })
    }

    searchEmployee = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter(item => {
            return item.name.indexOf(term) > -1
        }) //массив с работниками, прошедшими фильтр по имени. Поиск во всем слове, не по первой букве
    }

    onUpdateSearch = (term) => {
        this.setState({term}); // возврат объекта {term: term};
    }

    filterEmployees = (arr, filter) => {
        switch (filter) {
            case 'rise':
                return arr.filter(item => item.rise);

            case 'moreThen1000':
                return arr.filter(item => item.salary > 1000);
        
            default:
                return arr;
        }
    }

    onFilterSelection = (filter) => {
        this.setState({filter});
    }
 
    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length; // increased - получат премию
        const visibleData = this.filterEmployees(this.searchEmployee(data, term), filter); // двойная фильтрация - фильтрует отфильтрованный массив

        return (
            <div className="app">
                <AppInfo
                employees = {employees}
                increased = {increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter
                    filter = {filter}
                    onFilterSelection = {this.onFilterSelection}/>
                </div>
                <EmployeesList
                data = {visibleData}
                onDelete = {this.deleteItem}
                onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }
    
}

export default App;