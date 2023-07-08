import EmployesListItem from '../employers-list-item/employers-list-item';

import './employes-list.css';

const EmployesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployesListItem key={id} {...itemProps} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )

}

export default EmployesList;