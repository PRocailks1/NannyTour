import FotoPerfil from '../imagens/perfil.png';
import "./CardPrestadora.css";
import React, { useState } from 'react';
import {Col, Card, Button } from 'react-bootstrap';
import ContratarModal from './ContratarModal';

export default function CardPrestadora() {
    const [showContratarModal, setShowContratarModal] = useState(false);

    const handleContratarClick = () => {
        setShowContratarModal(true);
    }
    
    return (
        <>
            <Col sm={6} md={4} lg={3}>
                <Card>
                    <Card.Img variant="top" src={FotoPerfil} className="card-img-listagemPrestadoras" />
                    <Card.Body>
                        <Card.Title>Poliana Rocailks</Card.Title>
                        <Card.Text>Idade: 25 anos</Card.Text>
                        <Button onClick={handleContratarClick} className="btnPrimary">Contratar</Button>
                    </Card.Body>
                </Card>
                {showContratarModal && <ContratarModal onClose={() => setShowContratarModal(false)} />}
            </Col>
        </>
    );
}