import {Component} from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            titles: '',
            todoList: ["Học bài", "Chơi game"]
        }
    }

    handelAddButtonTodo(value) {
        this.setState(
            {
                titles: value
            }
        )
    }

    addTodo() {
        this.setState((previous) => ({
            todoList: [previous.titles, ...previous.todoList],
            titles: ''
        }))
    }

    render() {
        return (
            <>
                <div>
                    <input value={this.state.titles}
                           onChange={(event) => this.handelAddButtonTodo(event.target.value)}/>
                    <button onClick={() => this.addTodo()} className="btn btn-success ms-3">Add</button>
                </div>
                <div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todoList.map((todo, index) => (
                                <tr  key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {todo}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}