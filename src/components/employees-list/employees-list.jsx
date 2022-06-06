import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name ="John Brown" salary={800}/>
            <EmployeesListItem name ="David Smith" salary={3000}/>
            <EmployeesListItem name ="Michael Cornel" salary={5000}/>
        </ul>
    );
}

export default EmployeesList;