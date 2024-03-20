// FooterMenu.jsx
import React from 'react';
import './MenuFooter.css'; // Importando o arquivo de estilos 
import './HeaderDesktop.css';
import {Row, Col, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuFooter() {
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (eventKey) => {
        setActiveItem(eventKey);
    };

    return (
        <Navbar className="footer-menu">
            <Nav>
                <Row>
                    <Col><NavLink to="/listagemprestadoras" onClick={() => handleItemClick("/listagemprestadoras")} className={activeItem === "/listagemprestadoras" ? "sidebar-link active" : "sidebar-link"}>Prestadoras</NavLink></Col>
                    <Col><NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink></Col>
                    <Col><NavLink to="/servicos" onClick={() => handleItemClick("/servicos")} className={activeItem === "/servicos" ? "sidebar-link active" : "sidebar-link"}>Serviços</NavLink></Col>
                    <Col><NavLink to="/" onClick={() => handleItemClick("/")} className={activeItem === "/" ? "sidebar-link active" : "sidebar-link"}>Sair</NavLink></Col>
                </Row>
            </Nav>
        </Navbar>
    );
}
