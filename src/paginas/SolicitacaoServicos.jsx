import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CardContratante from '../componentes/CardContratante';

export default function SolicitacaoServicos() {
  return (
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col className='col-auto'><h3>Solicitações de Serviços</h3></Col>
      </Row>
      <Row className='justify-content-center mt-3 mb-3'>
        <Col xs={10}>
          <Form>
            <Row className="mb-3">
              <Form.Label column xs={1}>Nome:</Form.Label>
              <Col xs={5}>
                <Form.Control type="text" placeholder="Digite o nome" />
              </Col>
              <Form.Label column xs={1}>Data:</Form.Label>
              <Col xs={4}>
                <Form.Control type="date" placeholder="Digite o período" />
              </Col>
              <Col xs={1}>
                <Button variant="primary" className="w-100">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10}>
          <CardContratante />
          <CardContratante />
        </Col>
      </Row>
    </Container>
  );
}
