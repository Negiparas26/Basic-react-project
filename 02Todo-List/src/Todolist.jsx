import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todolist(){

    let [todos,setTodos]=useState([{task:"sample ",id:uuidv4()}]);
    let [newtodo,setnewTodo]=useState("");

    let addnewtask= ()=>{ 
            setTodos([...todos, {task:newtodo,id:uuidv4()}]);
    };
    let updatetodovalue=(event)=>{
        setnewTodo(event.target.value);
    };
 

    return(
        <div>
            <input placeholder="add a tak" value = {newtodo} onChange= {updatetodovalue }   />
            <button   onClick= { addnewtask}> add task</button>
            <br />
            <br />    
            <br />
            <hr />
            <h4>TASK list </h4>
            <ul>
                {
                    todos.map( (todo)=>(
                        <li key={todo.id}>
                            {todo.task}
                        </li>
                      ))
                }
            </ul>

        </div>


    );

}