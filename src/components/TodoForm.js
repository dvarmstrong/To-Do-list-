
import React, { useState } from "react"

const TodoForm = props => {
    
    const {toDoList, setToDoList} = props;

    const [addTodo, setAddTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefaut();
    
        
        setToDoList([...toDoList, addTodo]);
    };


    return (
        <>
            <form onSubmit = {submitHandler} style={{margin: '10px'}}>
                <h1> Add Task To your ToDo list !</h1>
                <div>
                    <label htmlFor ="task"></label>
                    <input  onChange = {(e) => setAddTodo(e.target.value)}
                    type = "text" 
                    name="task"
                
                    />
                </div>
                <button type ="submit">Submit</button>
               
            </form>
            <h1>{addTodo}</h1>  
        </>
);






};

export default TodoForm;
