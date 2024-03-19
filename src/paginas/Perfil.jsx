import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './ConsultaServicos.css';
import FormCompleto from '../componentes/FormCompleto';


export default function Perfil() {

  return (
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col className='col-auto'><h3>Perfil</h3></Col>
      </Row>
      <Row>
        <FormCompleto />
      </Row>
    </Container>
  );
}
