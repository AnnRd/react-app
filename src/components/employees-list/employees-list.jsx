import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
const elements = data.map(item => {
    return <EmployeesListItem 
    name = {item.name} 
    salary={item.salary}
    rise={item.rise}
    increase={item.increase} //можно использовать spread оп-тор {...item}, он развернет объект на отд. name и salary
    key={item.id} 
    onDelete={() => onDelete(item.id)}
    onToggleProp={(event) => {onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}}/> 
})

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;