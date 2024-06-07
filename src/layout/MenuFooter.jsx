import React, { useState, useEffect } from 'react';
import './MenuFooter.css';
import './HeaderDesktop.css';
import { Row, Col, Nav, Navbar, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

export default function MenuFooter() {
    const [activeItem, setActiveItem] = useState('');
    const [selectedOption, setSelectedOption] = useState('option1');
    const navigate = useNavigate();

    const handleItemClick = (eventKey) => {
        setActiveItem(eventKey);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        // Redirecionar para o primeiro link da opção selecionada
        if (selectedOption === 'option1') {
            navigate("/listagemprestadoras");
            setActiveItem("/listagemprestadoras");
        } else if (selectedOption === 'option2') {
            navigate("/solicitacaoservico");
            setActiveItem("/solicitacaoservico");
        } else if (selectedOption === 'option3') {
            navigate("/relatorioderendimento");
            setActiveItem("/relatorioderendimento");
        }
    }, [selectedOption, navigate]);

    return (
        <Navbar className="footer-menu">
            <Nav>
                <Row>
                    {selectedOption === 'option1' && (
                        <>
                            <Col><NavLink to="/listagemprestadoras" onClick={() => handleItemClick("/listagemprestadoras")} className={activeItem === "/listagemprestadoras" ? "sidebar-link active" : "sidebar-link"}>Prestadoras</NavLink></Col>
                            <Col><NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink></Col>
                            <Col><NavLink to="/servicos" onClick={() => handleItemClick("/servicos")} className={activeItem === "/servicos" ? "sidebar-link active" : "sidebar-link"}>Serviços</NavLink></Col>
                        </>
                    )}
                    {selectedOption === 'option2' && (
                        <>
                            <Col><NavLink to="/solicitacaoservico" onClick={() => handleItemClick("/solicitacaoservico")} className={activeItem === "/solicitacaoservico" ? "sidebar-link active" : "sidebar-link"}>Solicitações</NavLink></Col>
                            <Col><NavLink to="/perfil" onClick={() => handleItemClick("/perfil")} className={activeItem === "/perfil" ? "sidebar-link active" : "sidebar-link"}>Perfil</NavLink></Col>
                            <Col><NavLink to="/financeiro" onClick={() => handleItemClick("/financeiro")} className={activeItem === "/financeiro" ? "sidebar-link active" : "sidebar-link"}>Financeiro</NavLink></Col>
                        </>
                    )}
                    {selectedOption === 'option3' && (
                        <>
                            <Col><NavLink to="/relatorioderendimento" onClick={() => handleItemClick("/relatorioderendimento")} className={activeItem === "/relatorioderendimento" ? "sidebar-link active" : "sidebar-link"}>Rendimentos</NavLink></Col>
                        </>
                    )}
                    <Col><NavLink to="/" onClick={() => handleItemClick("/")} className={activeItem === "/" ? "sidebar-link active" : "sidebar-link"}>Sair</NavLink></Col>
                    <Col >
                        <Form.Group>
                            <Form.Select size="sm" value={selectedOption} onChange={handleOptionChange}>
                                <option value="option1">Contratante</option>
                                <option value="option2">Prestadora</option>
                                <option value="option3">Administrativo</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Nav>
        </Navbar>
    );
}
