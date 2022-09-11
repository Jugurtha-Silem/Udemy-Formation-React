import React, { useState } from 'react';

const AdTodoForm = ({addNewsTodo}) => {

    const [ addtodo, setAddTodo ] = useState('')

    const handleTodo = (e) => {
        e.preventDefault()
        addNewsTodo(addtodo)

        setAddTodo("")
    }

    return (
        <form onSubmit={handleTodo} >

            <div>
                <label>Ajouter todo </label>
                <input type="text" value={addtodo} onChange={(e) => setAddTodo(e.target.value)} />
                <input type="submit"/>
            </div>
        
        </form>
    );
};

export default AdTodoForm;