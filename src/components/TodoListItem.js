import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { availableColors, capitalize } from './Color';


const TodoListItem = ({id , text, completed, color}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleDelete = () => {
        dispatch({type: 'delete', payload: id});
    }

    const handleEdit = () => {
        // dispatch({type: 'edit', payload: id, text: ""})
        setEdit(true);
    }
    const handleKeyDown = (e) => {
        const trimText = editText.trim();
        if (e.which === 13 && trimText) {
            dispatch ({type: 'edit', payload: id, text: editText});
            setEdit(false);
        }
    }

    const handleComplete = () => {
        dispatch({type: 'complete', payload: id})
    }

    const handleColorChanged = (e) => {
        const color = e.target.value
        dispatch({type: 'colorSelect', payload: {todoId: id, color },})
    }

    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))
    return (
        <div style={{display: "flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"baseline", paddingTop:"20px"}}>
            <input type='checkbox' checked={completed} onChange={handleComplete} style={{marginRight:"50px"}}></input>
            <p style={{marginRight:"200px", width:"40%"}}>{text}</p>
            {edit ? <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
            /> : null}
            {''}
            <select className="colorPicker" value={color} onChange={handleColorChanged} style={{color, width:"100px", marginRight:"30px"}}>
                <option value=""></option>
                {colorOptions}
            </select>
            {''}
            <button onClick={handleDelete} style={{marginRight:"5%"}}>&#10008;</button>
            {''}
            <button onClick={handleEdit}>&#9998;</button>
        </div>
    )
}

export default TodoListItem
