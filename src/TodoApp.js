import useTodosState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import AppBar from "@material-ui/core/AppBar";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp(){
    //get items of todos, if its nothing there, then show a empty array 
    //if it is todos, then pass it in to usestate 
    const initalTodos = [{id: 1, task: "Pet a Monkey", completed: false}];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodosState(
        initalTodos
    );
    /* const initalTodos = [
        {id: 1, task: "Clean fishtank", completed: false},
        {id: 2, task: "Wash car", completed: true},
        {id: 3, task: "Grow bear", completed: false}
    ];  */

    

    return (
    <Paper
        style={{
            padding:0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <Toolbar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>

            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        />
                </Grid>
            </Grid>
        </Paper>
    );
}
 export default TodoApp;