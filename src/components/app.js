import React from "react";
import ToDosList from "./todosList";
import CreateTodo from "./createTodos";

const todos = [
    {
        task: "make React todo list",
        isCompleted: false
    },
    {
        task: "watch video",
        isCompleted: true
    }
];

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos
        }
    }
    render() {
        return (
            <div>
            <h1> React todo app</h1>
            < ToDosList todos= {this.state.todos} />
            </div>
        );
    }
}
