import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export default function ContratacaoServicoForm() {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Alert variant="info" className="text-center">
                        Prestadora disponível das <strong>18h</strong> até <strong>23h</strong>.
                    </Alert>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2"></Form.Label>
                            <Col sm="10">
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="data">
                            <Form.Label column sm="2">Data</Form.Label>
                            <Col sm="10">
                                <Form.Control type="date" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="horainicioservico">
                            <Form.Label column sm="2">Início</Form.Label>
                            <Col sm="10">
                                <Form.Control type="time" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="horaterminoservico">
                            <Form.Label column sm="2">Término</Form.Label>
                            <Col sm="10">
                                <Form.Control type="time" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="localservico">
                            <Form.Label column sm="2">Local</Form.Label>
                            <Col sm="10">
                                <Form.Control as="select">
                                    <option>Local Contratante</option>
                                    <option>Local Prestadora</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Col xs={6} className='col-auto'>
                                <Button className='btnPrimary' type="submit">
                                    Contratar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
