import React from 'react';

import { useState } from "react"



function Form(props) {

    function prevent (e){
        e.preventDefault() 
    }

    const { add } = props
    const [item, setItem] = useState('')

    return (
        <div className='container' >            
            <form onSubmit={prevent}>              
            <label hidden>Tarefas:</label>
            <input  
                autoFocus             
                className='input'
                value={item}
                placeholder="Insira uma tarefa"
                onChange={(e) => setItem(e.target.value)}></input>

            <div>
            <button className="btn btn-success mt-2" onClick={() => {
                add(item);  setItem('')}}> Salvar               
                </button>
            </div>
            </form>
        </div>
    )

}

export default Form