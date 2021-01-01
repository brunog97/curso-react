import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li onClick={ () => document.title = 'Home' }>
                    <Link to="/">Início</Link>
                </li>
                <li onClick={ () => document.title ='useState()'}>
                    <Link to="/useState">useState()</Link>
                </li>
                <li onClick={ () => document.title ='useEffect()'}>
                    <Link to="/useEffect">useEffect()</Link>
                </li>
                <li onClick={ () => document.title = 'useRef()'}>
                    <Link to="/useRef">useRef()</Link>
                </li>
                <li onClick={ () => document.title = 'useMemo()'}>
                    <Link to="/useMemo">useMemo()</Link>
                </li>
                <li onClick={ () => document.title = 'useCallback()'}>
                    <Link to="/useCallback">useCallback()</Link>
                </li>
                <li onClick={ () => document.title = 'useContext()'}>
                    <Link to="/useContext">useContext()</Link>
                </li>
                <li onClick={ () => document.title = 'useReducer()'}>
                    <Link to="/useReducer">useReducer()</Link>
                </li>
                <li onClick={ () => document.title = 'useCustom()'}>
                    <Link to="/useCustom">useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu