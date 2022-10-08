import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
const TodoItem = ({ todo, index }) => {
    const { setModal, setEditTodo } = useStateContext()
    const { title, description, status } = todo
    return (
        <div className='bg-green-300 border rounded-lg hover:cursor-pointer' onClick={() => {
            setEditTodo({...todo,index})
            setModal(true)
        }}>
            <div className='flex flex-col'>
                <h1 className={`${status === 'completed' ? 'line-through' : ''} text-center text-2xl capitalize`}>{title}</h1>
                <p className='text-center'>{description}</p>
                <div className={`text-right mb-2 mr-1 mt-4 ${status === 'pending' ?'animate-bounce' :''}`}>
                    <span className={`${status === 'completed' ? 'bg-green-400' : 'bg-red-500'} rounded-xl px-2 py-1`}>{status}</span>
                </div>

            </div>
        </div>
    )
}

export default TodoItem