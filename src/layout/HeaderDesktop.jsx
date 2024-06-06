import "./HeaderDesktop.css";
import logo from "../imagens/logo.png";
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (eventKey) => {
    setActiveItem(eventKey);
  };

  return (
    <Container fluid className="header">
      <Row>
        <Col>
          <Row className="justify-content-center p-3">
            <Col className="col-auto"><img src={logo} alt="Logo SitemasBR Sigecom" className="logoDash" /></Col>
          </Row>
          <Row>
            <Col className="sidebar">
              <Nav className="flex-column">
                <NavLink to="/listagemprestadoras" onClick={() => handleItemClick("/listagemprestadoras")} className={activeItem === "/listagemprestadoras" ? "sidebar-link active" : "sidebar-link"}>Prestadoras</NavLink>
                <NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink>
                <NavLink to="/servicos" onClick={() => handleItemClick("/servicos")} className={activeItem === "/servicos" ? "sidebar-link active" : "sidebar-link"}>Serviços</NavLink>
                <NavLink to="/financeiro" onClick={() => handleItemClick("/financeiro")} className={activeItem === "/financeiro" ? "sidebar-link active" : "sidebar-link"}>Financeiro</NavLink>
                <NavLink to="/" onClick={() => handleItemClick("/")} className={activeItem === "/" ? "sidebar-link active" : "sidebar-link"}>Sair</NavLink>
              </Nav>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}