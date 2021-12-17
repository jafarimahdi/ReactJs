import React,{useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css'


function Header() {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <div>
            
            <Link to='/' >
            <p className={`${activeTab === 'Home' ? 'active' :''}`} onClick={() =>setActiveTab('Home')}>Home</p>
            </Link>
            <Link to='/' >
            <p className={`${activeTab === 'AddContact' ? 'active' :''}`} onClick={() =>setActiveTab('AddContact')}>addContact</p>
            </Link>
            <Link to='/' >
            <p className={`${activeTab === 'About' ? 'active' :''}`} onClick={() =>setActiveTab('About')}>About</p>
            </Link>
        </div>
    )
}

export default Header
