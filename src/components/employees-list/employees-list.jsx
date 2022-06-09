import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onTogglerise}) => {
const elements = data.map(item => {
    return <EmployeesListItem 
    name = {item.name} 
    salary={item.salary} 
    increase={item.increase} //можно использовать spread оп-тор {...item}, он развернет объект на отд. name и salary
    key={item.id} 
    onDelete={() => onDelete(item.id)}
    onToggleIncrease={() => {onToggleIncrease(item.id)}}
    onTogglerise={() => {onTogglerise(item.id)}}/> 
})

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;