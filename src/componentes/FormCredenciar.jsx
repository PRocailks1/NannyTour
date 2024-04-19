import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

export default function CredenciamentoForm() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <Form className='formulario'>
                        <Form.Group as={Row} className="mb-3" controlId="tempoexperiencia">
                            <Form.Label column sm="3">Tempo de exp:</Form.Label>
                            <Col sm="9">
                                <Form.Control size="lg" type="text" placeholder="Ex: X anos" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="tempoexperiencia">
                            <Form.Label column sm="3">Fale sobre você:</Form.Label>
                            <Col sm="9">
                                <Form.Control as="textarea" rows={3} size="lg" type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="fileUpload">
                            <Form.Label column sm="3">Upload de arquivo:</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    type="file"
                                    size="lg"
                                />
                            </Col>
                        </Form.Group>
                        <Row className="justify-content-center">
                            <Col xs={6} className='col-auto'>
                                <Button className='btnPrimary' type="submit">
                                    Solicitar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
