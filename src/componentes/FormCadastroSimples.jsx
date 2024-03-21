// components/FormularioBasico.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './FormGeral.css';

export default function FormularioBasico() {
  const isMobile = window.innerWidth >= 1200;

  return (



    <Container>
      {
        isMobile ? (
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <Form className='formulario'>
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
        ) : (
          <Row className="justify-content-center">
            <Col xs={11}>
              <Form className='formulario'>
                <Form.Group className="mb-3" controlId="nomeCompleto">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control size="lg" type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="dataNascimento">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control size="lg" type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control size="lg" type="text" placeholder="Digite seu CPF" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Digite seu email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control size="lg" type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmarSenha">
                  <Form.Label>Confirmar Senha</Form.Label>
                  <Form.Control size="lg" type="password" placeholder="Confirme sua senha" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tipoUsuario">
                  <Form.Label>Tipo de Usuário</Form.Label>
                  <Form.Control size="lg" as="select">
                    <option>Contratante</option>
                    <option>Prestadora</option>
                  </Form.Control>
                </Form.Group>
                <Row className="justify-content-center mt-4">
                  <Col className='col-auto'>
                    <Button size="lg" className='btnPrimary' type="submit">
                      Cadastrar
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        )
      }
    </Container>
  );
}
