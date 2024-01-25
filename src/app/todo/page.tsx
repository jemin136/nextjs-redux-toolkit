"use client";

import { AppDispatch, RootState } from "@/redux/store";
import { addTodo, removeTodo, toggleTodo } from "@/redux/todo/todo-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
    const todoList = useSelector((state: RootState) => state.todoReducer.list);
    const dispatch = useDispatch<AppDispatch>();
    const [todo, setTodo] = React.useState("");

    const handleSubmit = () => {
        if (!todo.trim()) {
            alert("Please enter a task");
            return;
        } else {
            dispatch(
                addTodo({
                    id: Date.now(),
                    name: todo,
                    done: false,
                })
            );
            setTodo("");
        }
    };

    const handleDelete = (id: number) => {
        dispatch(removeTodo(id));
    };

    const handleToggle = (id: number) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    className="shadow border rounded py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add a new task"
                />
                <button
                    onClick={handleSubmit}
                    className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                >
                    Add
                </button>
            </div>

            <div>
                {todoList.map((todo) => (
                    <div key={todo.id} className="flex items-center justify-between mb-4 bg-white shadow px-4 py-2 rounded">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => handleToggle(todo.id)}
                                className="mr-2"
                            />
                            <span className={todo.done ? "line-through" : undefined}>
                                {todo.name}
                            </span>
                        </div>

                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default TodoList;