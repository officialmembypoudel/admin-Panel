import React, { useState } from "react";
import "../Css/SideDashboard.css";
import { GoPlus, GoX } from "react-icons/go";

const todoItems = [
    {
        id: 1,
        task: "Meeting with marketing team at 10 A.M",
    },
    {
        id: 2,
        task: "Meeting with Clients at 12 P.M",
    },
    {
        id: 3,
        task: "Troubleshoot Karobar App",
    },
    {
        id: 4,
        task: "Meeting with Investors at 2 P.M",
    },
    {
        id: 5,
        task: "Presentation at H.E.B.S at 3 P.M",
    },
    {
        id: 6,
        task: "Presentation at IIC at 4 P.M",
    },
]


const TodoList = () => {
    const [todo, setTodo] = useState(todoItems)
    const [input, setInput] = useState('')



    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)


    }

    const addTodo = (input) => {
        let newTodo = [...todo]
        console.log(newTodo)
        newTodo = [...newTodo, { id: todo.length + 1, task: input, completed: false }]
        console.log("below this line")
        console.log(newTodo)
        setTodo(newTodo)
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        addTodo(input)
        setInput('')
    }
    const handelCompleted = (e) => {
        let value = e.currentTarget.id
        console.log(value)
        let filteredList = todo.filter(task => {
            return task.id !== Number(value)
        })
        setTodo(filteredList)
    }

    return (

        <div className="todo-lists">
            <h2>TODO LIST</h2>
            <form onSubmit={handelSubmit}>
                <div className="input-bar">
                    <input className="input" value={input} type="text" onChange={handleChange} placeholder="Add Item to Todo"></input>
                    <button className="go-plus"><GoPlus /></button>
                </div>
            </form>
            <div className="todo-container">
                <div className="todo-items">

                    {todo.map((todo) => {
                        return (
                            <div className="todo-flex" key={todo.id}>
                                <GoX className="delete" id={todo.id} key={todo.id.toString()} value={todo.completed} onClick={handelCompleted} />
                                <p className="label" key={todo.task} value={todo.completed}>{todo.task}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList;