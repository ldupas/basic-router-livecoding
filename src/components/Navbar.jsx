import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <ul className='Navigation'>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
    )
}

