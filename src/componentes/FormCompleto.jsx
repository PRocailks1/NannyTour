// components/FormularioAvancado.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './FormGeral.css';

export default function FormularioAvancado() {
    const [tipoUsuario, setTipoUsuario] = useState('Contratante');

    const handleTipoUsuarioChange = (event) => {
        setTipoUsuario(event.target.value);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={11} lg={8}>
                    <Form className='formulario'>
                        <Form.Group controlId="tipoUsuario" as={Row} className="mb-3">
                            <Form.Label column sm="3">Tipo de Usuário</Form.Label>
                            <Col sm="9">
                                <Form.Control as="select" value={tipoUsuario} onChange={handleTipoUsuarioChange}>
                                    <option value="Contratante">Contratante</option>
                                    <option value="Prestadora">Prestadora</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        {tipoUsuario === 'Prestadora' && (
                            <>
                                <Form.Group controlId="horaInicio" as={Row} className="mb-3">
                                    <Form.Label column sm="4">Horário de serviço:</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="time" />
                                    </Col>
                                    <Col sm="4">
                                        <Form.Control type="time" />
                                    </Col>
                                </Form.Group>
                            </>
                        )}
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
                            <Form.Label column sm="2">Nome:</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Informe seu nome" className="mt-1" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="dataNascimento" as={Row} className="mb-3">
                            <Form.Label column sm="5">Data de Nascimento:</Form.Label>
                            <Col sm="7">
                                <Form.Control type="date" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="cpf" as={Row} className="mb-3">
                            <Form.Label column sm="2">CPF:</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Digite seu CPF" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="email" as={Row} className="mb-3">
                            <Form.Label column sm="2">Email:</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Digite seu email" />
                            </Col>
                        </Form.Group>
                        <Row className='mb-3'>
                            <Col sm={6}>
                                <Form.Group controlId="senha">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite sua senha" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group controlId="confirmarSenha">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Confirme sua senha" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={6} className='col-auto'>
                                <Button className='btnPrimary' type="submit">
                                    Salvar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
