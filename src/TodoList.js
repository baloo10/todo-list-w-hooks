import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Link } from '@material-ui/core';
import Todo from "./Todo";



function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    if(todos.length) //if the are todos, then you can return
    return (
        <Paper>
            <List>
            {todos.map( (todo,index) => (
                <>
                <Todo 
                    
                    {...todo}
                    key={todo.id} 
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    />
                     {/* to get the last indez todos.length - 1 */}
                    { index < todos.length - 1 && <Divider/> }
                </>  
            ))}
            </List>         
        </Paper>
    );
    return null;
}

export default TodoList;
