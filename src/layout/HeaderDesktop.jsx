import "./HeaderDesktop.css";
import logo from "../imagens/logo.png";
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [activeItem, setActiveItem] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1'); // Estado para controlar a opção selecionada

  const handleItemClick = (eventKey) => {
    setActiveItem(eventKey);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
                {selectedOption === 'option1' && (
                  <>
                    <NavLink to="/listagemprestadoras" onClick={() => handleItemClick("/listagemprestadoras")} className={activeItem === "/listagemprestadoras" ? "sidebar-link active" : "sidebar-link"}>Prestadoras</NavLink>
                    <NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink>
                    <NavLink to="/servicos" onClick={() => handleItemClick("/servicos")} className={activeItem === "/servicos" ? "sidebar-link active" : "sidebar-link"}>Serviços</NavLink>
                  </>
                )}
                {selectedOption === 'option2' && (
                  <>
                    <NavLink to="/solicitacaoservico" onClick={() => handleItemClick("/solicitacaoservico")} className={activeItem === "/solicitacaoservico" ? "sidebar-link active" : "sidebar-link"}>Solicitações</NavLink>
                    <NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink>
                    <NavLink to="/financeiro" onClick={() => handleItemClick("/financeiro")} className={activeItem === "/financeiro" ? "sidebar-link active" : "sidebar-link"}>Financeiro</NavLink>
                  </>
                )}
                {selectedOption === 'option3' && (
                  <>
                    <NavLink to="/relatorioderendimento" onClick={() => handleItemClick("/relatorioderendimento")} className={activeItem === "/relatorioderendimento" ? "sidebar-link active" : "sidebar-link"}>Relatório de Rendimento</NavLink>
                  </>
                )}
                <hr />
                <NavLink to="/" onClick={() => handleItemClick("/")} className={activeItem === "/" ? "sidebar-link active" : "sidebar-link"}>Sair</NavLink>
              </Nav>
              <Row className="p-3 select-menu">
                <Col>
                  <Form.Group>
                    <Form.Select size="sm" value={selectedOption} onChange={handleOptionChange}>
                      <option value="option1">Contratante</option>
                      <option value="option2">Prestadora</option>
                      <option value="option3">Administrativo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
