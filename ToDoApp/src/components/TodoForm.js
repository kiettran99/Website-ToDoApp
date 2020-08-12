import React from 'react';

export default class TodoForm extends React.Component {

    state = {
        description: '',
        responsible: '',
        priority: 'Low',
        compeleted: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {

        if (this.props.id) {
            const todo = await this.props.getTodos(this.props.id);

            console.log(todo.data);
            if (todo) {
                this.setState(() => ({ ...this.state, ...todo.data }));
            }
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);

        this.props.onSubmit(this.state);

        this.setState(() => ({
            description: '',
            responsible: '',
            priority: 'Low',
            compeleted: false
        }));
    }

    onChangeTodoDescription = (e) => {
        const description = e.target.value || '';
        this.setState(() => ({ description }));
    }

    onChangeTodoResponsible = (e) => {
        const responsible = e.target.value || '';
        this.setState(() => ({ responsible }));
    }

    onChangeTodoPriority = (e) => {
        const priority = e.target.value || 'Low';
        this.setState(() => ({ priority }));
    }

    onChangeTodoCompleted = (e) => {
        this.setState(() => ({ compeleted: !this.state.compeleted }));
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                {this.props.id ? <h3>Edit Todo</h3> : <h3>Create new Todo</h3>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeTodoDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    {
                        this.props.id &&
                        <div>
                            <div className="form-check">
                                <input className="form-check-input"
                                    id="completedCheckbox"
                                    type="checkbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.completed}
                                    value={this.state.completed}
                                />
                                <label className="form-check-label" htmlFor="completedCheckbox">
                                    Completed
                                </label>
                            </div>
                            <br />
                        </div>
                    }

                    <div className="form-group">
                        <input type="submit" value={this.props.id ? "Edit todo" : "Create todo"} className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}