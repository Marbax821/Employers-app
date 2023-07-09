import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchPanel = (e) => {
        // когда срабатывает событие получаем value которое ввел пользователь
        const term = e.target.value;
        // устанавливаем setState term локального состояния, внутри этого компонента
        this.setState({term: term});
        // пробрасываем состояние term локального состояния наверх в app при помощи метода onUpdateSearch
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <input
                type="text"
                placeholder="Найти сотрудника"
                className="form-control search-input"
                value={this.state.term}
                onChange={this.onUpdateSearchPanel} />
        )
    }
}

export default SearchPanel;