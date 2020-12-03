import useLocalStorageState  from "./useLocalStorageState";
import { v4 as uuid } from 'uuid';

export default initialTodos => { 
    //the todo state, this will make the state for us
    //todos is the key
    const [todos, setTodos] = useLocalStorageState("todos",initialTodos);
    //we return the object, with the refference to the state
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuid() , task: newTodoText, completed:false}]);
        },
        //to remove a todo
        removeTodo: todoId => {
             //filter out removed todo
            //todo.id !== todoId this will filter out the one todo we try to remmove
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            //call setTodos with new todos array
            //the new updated todos,where we have filter the one todo out
            setTodos(updatedTodos)
        },
        toggleTodo: todoId => {
            
            const updatedTodos = todos.map(todo =>
                //if todo.id is eqaul to the todoId we passed in, then
                //copy the the todos, but set completed to not completed, toggle it
                //otherwise, just return the regular todo
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
                );
           
            setTodos(updatedTodos)
    },
    editTodo: (todoId, newTask ) => {
        const updatedTodos = todos.map(todo => 
            
            todo.id === todoId ? {...todo, task:newTask} : todo
        );
         setTodos(updatedTodos);
        }
    }; 

};