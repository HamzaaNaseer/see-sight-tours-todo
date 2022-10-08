import React from 'react'
import TodoItem from './TodoItem'
import Modal from './Modal'
import { useStateContext } from '../contexts/ContextProvider'
import AddTodo from './AddTodo'


const TodoGrid = () => {
    
    const { modal,todos } = useStateContext()
    
    return (
        <>
        <AddTodo/>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10 px-3'>
                {todos.map((item, idx) => <TodoItem key={idx} index={idx} todo={item} />)}
            </div>
            {modal && <Modal/>}
        </>
    )
}

export default TodoGrid