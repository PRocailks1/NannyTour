import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TabelaFinanceiroPrestadora from '../componentes/TabelaFinanceiroPrestadora';

export default function ConsultaServicos() {
  return (
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col className='col-auto'><h3>Extrato financeiro</h3></Col>
      </Row>
      <Row className='justify-content-center mt-3 mb-3'>
      <Row className='justify-content-center mt-3 mb-3'>
        <Col xs={10}>
          <Form>
            <Row className="mb-3">
              <Form.Label column xs={1}>Período:</Form.Label>
              <Col xs={4}>
                <Form.Control type="date"/>
              </Col>
              <Col xs={4}>
                <Form.Control type="date"/>
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
        <Col xs={10}>
          <TabelaFinanceiroPrestadora/>
        </Col>
      </Row>
    </Container>
  );
}
