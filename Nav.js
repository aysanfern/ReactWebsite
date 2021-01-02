import React from 'react';
import {NavLink} from 'react-router-dom'
import {Style} from '../style/styles.css'
import Image from'react-bootstrap/Image'
import logo from '../images/logo3.png'


const font = {
    fontFamily:'Yellowtail'
}

export function Nav(){
    return(
        
        
        <nav className="navy">
            <NavLink to='/' className="new">
                <div className='alignitems'>
            <h3 style={font}>Laura Creative Wonders</h3>
            </div>
           
            </NavLink>
            
            <ul className="list">
                <NavLink className="new" to='/about'>
                <li>About </li>
                </NavLink>
                <NavLink className="new" to='/'>
                <li>Shop</li>
                </NavLink>
            </ul>
        </nav>
    
    )
}