import React from 'react';
import deleteicon from "../img/deleteicon.png";



function Todos(props) {

    const { tasks } = props

    return (
        <>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Data:</th>
                            <th scope="col">Tarefa:</th>
                            <th scope="col">Situação:</th>
                        </tr>
                    </thead>
                    {tasks.map((task, index) => {
                        return (
                            <tbody key={index} className={task.complete ? "complete" : ""}>
                                <tr>
                                    <td className='date'>{task.date}</td>
                                    <td className='task'>{task.task}</td>
                                    <td>
                                        <div>
                                            <input type="checkbox" id="check" className="checkbox" onClick={() => props.complete(index)} />
                                            <label forhtml="check" className="checkbox-input">{task.complete ? "Retomar tarefa" : "Concluir Tarefa"}</label>
                                        </div>
                                        <button className="btn btn-danger btn-sm-1" onClick={() => props.deleteItem(index)}><img src={deleteicon} alt="teste}" /></button>

                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                    }
                </table>
            </div>
        </>
    )
}

export default Todos
