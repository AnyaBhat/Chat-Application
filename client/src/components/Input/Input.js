import React from 'react'

import './Input.css';
const Input = ({message,setMessage,sendMessage}) => (
    <form className='form'>
        <input 
        className="input" 
        placeholder='Type a message' 
        type="text" 
        value={message} 
        onChange={({ target: { value } }) => setMessage(value)} 
        onKeyDown={e=>e.key==='Enter' ? sendMessage(e):null}/>

        <button className='sendButton' onClick={(e)=>sendMessage(e)}>Send</button>
    </form>
)


export default Input
