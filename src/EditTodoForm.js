import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import Todo from "./Todo";
 
function EditToForm ({editTodo, id, task, toggleEditForm}){
    //the initinal value is the task that is allready there
    const [value, handleChange, reset] = useInputState(task);
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm()
        }}
        style={{marginLeft: "1rem", width: "100%"}}
        >
        <TextField 
            margin="normal" 
            value={value} 
            onChange={handleChange} 
            fullWidth
            autoFocus //when you enter edith icon, you can write right away
        />
        </form>
    )
}

export default EditToForm; 