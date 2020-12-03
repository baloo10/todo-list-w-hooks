import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState("");
    return(
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                //wheb form is submitete, we call addTodo
                addTodo(value);
                //then we reset the form with the hook
                reset()
            }}>
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal" 
                label="Legg til i huskelisten"
                fullWidth
                /> 
            </form>
        </Paper>
    )
}

export default TodoForm;