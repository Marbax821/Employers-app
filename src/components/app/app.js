import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employers-list/employers-list';
import EmployesAddForm from '../employers-add-form/employers-add-form';

import './app.css'

function App() {

    const data = [
        {id:1, name: 'John C.', salary: 800, increase: true},
        {id: 2, name: 'Alex H.', salary: 3000, increase: false},
        {id: 3, name: 'Brayan N.', salary: 5000, increase: false},
        {id: 4, name: 'Brayan B.', salary: 15000, increase: false}
    ];

    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployesList data={data} />
            <EmployesAddForm />
        </div>
    );
}

export default App;