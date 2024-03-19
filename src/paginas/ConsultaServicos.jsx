import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import FotoPerfil from '../imagens/perfil.png';
import './ConsultaServicos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ConsultaServicos() {
  return (
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col className='col-auto'><h3>Serviços Contratados</h3></Col>
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
          <Card className='card'>
            <Row>
              <Col xs={2}>
                <Card.Img variant="top" src={FotoPerfil} className="card-img-historico" />
              </Col>
              <Col xs={10} className="d-flex flex-column justify-content-center">
                <Card.Body>
                  <Card.Title className="text-center titulo-card-servicoContratado mb-3">Juliana da Silva</Card.Title>
                  <Row className="d-flex flex-row justify-content-between align-items-center">
                    <Col className='text-center'><Card.Text>Data: 25/02/2024</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Horário: 19h/22h</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Valor Pago: R$100,00</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Local: Contratante</Card.Text></Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={6}>
                      <Button className="btnPrimary mt-3">Contratar novamente</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className='card'>
            <Row>
              <Col xs={2}>
                <Card.Img variant="top" src={FotoPerfil} className="card-img-historico" />
              </Col>
              <Col xs={10} className="d-flex flex-column justify-content-center">
                <Card.Body>
                  <Card.Title className="text-center titulo-card-servicoContratado mb-3">Juliana da Silva</Card.Title>
                  <Row className="d-flex flex-row justify-content-between align-items-center">
                    <Col className='text-center'><Card.Text>Data: 25/02/2024</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Horário: 19h/22h</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Valor Pago: R$100,00</Card.Text></Col>
                    <Col className='text-center'><Card.Text>Local: Contratante</Card.Text></Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col sm={6}>
                      <Button className="btnPrimary mt-3">Contratar novamente</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
