import React, { useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import ReactjsAlert from 'reactjs-alert'

const Modal = () => {
  const { setModal, editTodo, setEditTodo, deleteTodo, changeStatus, updateTodo } = useStateContext()
  const whatToDo = editTodo.status === 'pending' ? 'completed' : 'pending'


  //alert

  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [titlee, setTitlee] = useState("");


  const onChange = (e) => {
    setEditTodo({
      ...editTodo,
      [e.target.name]: e.target.value,
    });
  };
  const handleupdate = (e) => {
    if (editTodo.title.length <= 0 || editTodo.description.length <= 0) {
      setStatus(true)
      setType("error")
      setTitlee("cannot be empty")
      return
    }
    updateTodo(editTodo.title, editTodo.description, editTodo.index)
  }



  return (
    <>


      <ReactjsAlert
        status={status} // true or false
        type={type} // success, warning, error, info
        title={titlee}
        quotes={true}
        quote="provide some values"
        Close={() => setStatus(false)}
      />
      <div className='bg-transparent w-screen h-screen fixed z-10 top-0 right-0'>
        <div className='flex h-screen'>
          <div className='md:h-[50%] md:w-[40%] w-[80%] h-[40%] bg-white m-auto rounded-xl'>

            <button className='float-right pr-3 hover:text-red-400' onClick={() => { setModal(false) }}> X</button>
            <div className='flex flex-col mt-3 mx-auto'>
              <div className='flex flex-col justify-center'>

                <h className="text-3xl font-normal leading-normal mt-0 mb-2 text-fuchsia-800 mx-auto capitalize">title</h>
                <input name='title' onChange={onChange} className='border bg-inherit rounded-xl pl-2 ' type="text" value={editTodo.title} />
              </div>
              <div className='flex flex-col justify-center'>
              <h className="text-3xl font-normal leading-normal mt-0 mb-2 text-fuchsia-800 mx-auto capitalize">description</h>
                <input name='description' onChange={onChange} className='border bg-inherit rounded-xl pl-2 w-[100%]' type="text" value={editTodo.description} />
              </div>

            </div>
            <div className='flex justify-around mt-7 text-red-400'>
              <button className='bg-red-500 px-2 py-1 rounded-xl text-black hover:text-white' onClick={() => { deleteTodo(editTodo.index) }}>delete</button>
              <button className='bg-red-500 px-2 py-1 rounded-xl text-black hover:text-white' onClick={handleupdate}>update</button>
              <button className='bg-red-500 px-2 py-1 rounded-xl text-black hover:text-white' onClick={() => { changeStatus(whatToDo, editTodo.index) }}>{`mark ${whatToDo}`}</button>
            </div>



          </div>
        </div>

      </div>
    </>
  )
}

export default Modal