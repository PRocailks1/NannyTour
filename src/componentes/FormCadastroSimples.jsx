// components/FormularioBasico.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function FormularioBasico() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={11}>
          <Form>
          <Form.Group controlId="tipoUsuario" as={Row} className="mb-3">
              <Form.Label column sm="4">Tipo de Usuário</Form.Label>
              <Col sm="8">
                <Form.Control as="select">
                <option>Contratante</option>
                <option>Prestadora</option>
              </Form.Control>
              </Col>
            </Form.Group>
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
              <Col className='col-auto'>
                <Button variant="primary" type="submit">
                  Cadastrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
