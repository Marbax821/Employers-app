import { Component } from 'react';

import './employes-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: false,
                salary: false
            }
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: {
                ...this.state.errors,
                [e.target.name]: false
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, salary } = this.state;

        if (name && salary) { // Проверяем наличие значений name и salary
            this.props.onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            });
        } else {
            this.setState({
                errors: {
                    name: !name,
                    salary: !salary
                }
            });
        }
        setTimeout(() => {
            this.setState({
                errors: {
                    name: false,
                    salary: false
                }
            });
        }, 2000);
    };

    render() {
        const { name, salary, errors } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={`form-control new-post-label ${errors.name ? 'error' : ''}`}
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={`form-control new-post-label ${errors.salary ? 'error' : ''}`}
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;