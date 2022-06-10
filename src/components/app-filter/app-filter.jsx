import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/п больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name; //кпонка активна, если строка filter совпадает со строкой name
        const classNaming = active ? 'btn-light' : 'btn-outline-light';

        return (
                <button 
                className={`btn ${classNaming}`}
                type="button"
                key={name}>
                    {label}
                </button>
        )
    })

    return (
         <div className="btn-group">
             {buttons}
         </div>
    );
}

export default AppFilter;