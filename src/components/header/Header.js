import React from 'react'
import './header.css'


const Header = ({active, done}) => {
    return (
        <div className='header'>
            <h1>Todo List</h1>
            <h2>{active} active, {done} done</h2>
        </div>
    )
}


export default Header