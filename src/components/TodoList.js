import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    console.log(todos);

    return (
        <div>
            {todos.map((todo) => todo.isDeleted ? null : (
            <TodoListItem key={todo.id} {...todo}/>
            ))}
        </div>
    )
}

export default TodoList
// id={todo.id} text={todo.text} = {...todo}