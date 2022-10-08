import React, { useState } from 'react'
import ReactjsAlert from 'reactjs-alert'
import { useStateContext } from '../contexts/ContextProvider'

const AddTodo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { addTodo } = useStateContext()

    //alert

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("");
    const [titlee, setTitlee] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        // if noting is typed then simply return
        if (title.length <= 0 || description.length <= 0) {
            setStatus(true)
            setType("error")
            setTitlee("cannot be empty")
            return
        }
        addTodo({ title, description, status: 'pending' })
        setTitle('')
        setDescription('')
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

            <form>
                <div className='md:flex mx-auto mt-3 ml-3 gap-2 ' onSubmit={handleSubmit}>
                    <input className='border-2 border-pink-800 rounded-xl pl-2' type="text" placeholder='enter  todo title' value={title} onChange={(e) => { setTitle(e.target.value) }} minLength={5} />
                    <input className='border-2 border-pink-800 rounded-xl pl-2' type="text" placeholder='enter  todo description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type='submit' className='bg-green-300 rounded-2xl px-4 py-2 hover:text-white' onClick={handleSubmit} value='submit' />
                </div>
            </form>
        </>
    )
}

export default AddTodo