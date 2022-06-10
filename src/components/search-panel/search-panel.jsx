import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    updateSearch = (event) => {
        const term = event.target.value;
        this.setState({term}); //возврат объекта {term: term}; установка локального состояния, которое пробросится наверх в app.jsx
        this.props.onUpdateSearch(term); //проброс наверх в app.jsx
    }

    render() {
        return (
            <input type="text" 
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   defaultValue={this.state.term}
                   onChange={this.updateSearch}/>
        );
    }
}

export default SearchPanel;