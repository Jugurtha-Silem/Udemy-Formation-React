import React, { useState } from 'react';
import AdTodoForm from './AdTodoForm';

const Todo = () => {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'},
        {id: 3, todo: 'Acheter du fromage'}
    ])

    const [warning, setWarning] =useState(false);


    const myTodos = todos.map((todo, index) => {
        return(
            <li key={index}>{todo.todo}</li>
        )
    })

    const addNewsTodo = (newTodo, index) =>{

        if(newTodo!==''){

            warning && setWarning(false);
            
            setTodos([...todos, {
                    id: {index},
                    todo: newTodo
                }  
            ])

        } else {

            setWarning(true)

        }
    }

    const warningMessage = warning && alert('veuillez indiquer un todo');

    return (
        <div >
            {
                warningMessage
            }

            <h1>{todos.length} to-do</h1>
            <ul>
               {myTodos  }
            </ul>
            <AdTodoForm addNewsTodo={addNewsTodo}/>
        </div>
        
    );
};

export default Todo;