import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Nav, NavItem, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <div className="row">
            <p className="">Logo</p>

            <Nav variant='pills' className="justify-content-end" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/AddContact">AddContact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/About">About</Nav.Link>
                </Nav.Item>
                
            </Nav>

            {/* <div> */}
            {/* <Link to='/' >
            <Button className={`${activeTab === 'Home' ? 'active' :''}`} onClick={() =>setActiveTab('Home')}>Home</Button>
            </Link>
            <Link to='/' >
            <p className={`${activeTab === 'AddContact' ? 'active' :''}`} onClick={() =>setActiveTab('AddContact')}>addContact</p>
            </Link>
            <Link to='/' >
            <p className={`${activeTab === 'About' ? 'active' :''}`} onClick={() =>setActiveTab('About')}>About</p>
            </Link> */}
            {/* </div> */}
        </div>
    );
}

export default Header;
