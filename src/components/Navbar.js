import React from 'react'
import {NavLink} from 'react-router-dom'


export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">GitHub Поиск</NavLink>
        <ul className="nav navbar-nav mr-auto" style={{flexDirection:"row"}}>
            <li className="nav-item mr-3">
                <NavLink exact to="/" className="nav-link">Главная</NavLink>
            </li>
            <li className="nav-item mr-3">
                <NavLink to="/about" className="nav-link">Информация</NavLink>
            </li>
        </ul>
    </nav>
)