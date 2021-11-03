import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StatusFilters } from './Filter'

const RemainingTodos = ({count}) => {
    const item = count === 1? '' : 's'
    return (
        <div>
            <h5>Remaining Todos:</h5>
            <strong>{count}</strong> item{item} left
        </div>
    )
}
const CompletedTodos = ({count}) => {
    const item = count === 1? '': 's'
    return (
        <div>
            <h5>Completed Todos:</h5>
            <strong>{count}</strong> todo{item} completed
        </div>
    )
}
const TotalTodos = ({count}) => {
    const item = count === 1? '': 's'
    return (
        <div>
            <h5>Total Todos:</h5>
            <strong>{count}</strong> todo{item} in total
        </div>
    )
}

const StatusFilter = ({value: status, onChange}) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const handleClick = () => onChange(value);
        const className = value === status ? 'selected' : "";
        return (
            <li key={value}>
                <button className={className} onClick={handleClick}>
                {key}
                </button>
            </li>
        )
    })
    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

const Footer = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.filters);
    const todosRemaining = useSelector((state) => {
        const uncompletedTodos = state.todos.filter((todo) => !todo.completed);
        return uncompletedTodos.length;
    });
    const completedTodos = useSelector((state) => {
        const completedList = state.todos.filter((todo) => todo.completed);
        return completedList.length
    });
    const totalTodos = useSelector((state) => {
        const totalList = state.todos.map((todo) => todo.id);
        return totalList.length
    })
    const handleMarkCompleted = () => dispatch({type: 'allCompleted'});
    const handleClearCompleted = () => dispatch({type: 'clearCompleted'});
    const onStatusChange = (status) => dispatch({type: "statusChange", payload: status});
    return (
        <footer className="footer">
            <div style={{display:"flex", flexDirection:"column"}}>
                <h5>Actions</h5>
                <button onClick={handleMarkCompleted} style={{height:"20px", backgroundColor:"lightblue", marginBottom:"10px"}}>
                    Mark All Completed
                </button>
                <button onClick={handleClearCompleted} style={{height:"20px", backgroundColor:"lightblue"}}>
                    Clear All Completed
                </button>
            </div>
            <div>
            <RemainingTodos count={todosRemaining} />
            <TotalTodos count={totalTodos} />
            <CompletedTodos count={completedTodos} />
            </div>
            <StatusFilter value={status} onChange={onStatusChange} />
        </footer>
    )
}

export default Footer;