import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditToForm from "./EditTodoForm"; 
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({task, completed, removeTodo,toggleTodo, id, editTodo}){
    const [isEditing, toggle] = useToggleState(false);
    return (
    <ListItem style= {{height: "64px"}}>
        {isEditing ? (
            <EditToForm editTodo={editTodo} id={id} task={task}toggleEditForm={toggle}/>
         ) :(
             <>        
        <Checkbox tabIndex ={-1}checked={completed} onClick={() => toggleTodo(id)}/> 
        <ListItemText
            style={{
                textDecoration: completed ? "line-through" : "none"}}//if one is completaed, then add line-throgh style 
                >
                {task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                <DeleteIcon /> 
            </IconButton>

            <IconButton onClick={toggle} aria-label="edit">
                <EditIcon /> 
            </IconButton>
        </ListItemSecondaryAction>
        </>
         )}
    </ListItem>
   );
}

export default Todo; 