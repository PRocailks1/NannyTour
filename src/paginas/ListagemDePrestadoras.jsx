import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPrestadora from '../componentes/CardPrestadora';

export default function ListagemDePrestadoras() {

  return (
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col className='col-auto'><h3>Listagem de Prestadoras</h3></Col>
      </Row>
      <Row>
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
        <CardPrestadora />
      </Row>
    </Container>
  );
}
