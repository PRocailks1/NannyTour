import FotoPerfil from '../imagens/perfil.png';
import "./CardPrestadoraHistorico.css";
import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ContratarModal from './ContratarModal';

export default function CardPrestadora() {
    const [showContratarModal, setShowContratarModal] = useState(false);

    const handleContratarClick = () => {
        setShowContratarModal(true);
    }

    // Suponha que você tenha uma média de avaliação da prestadora (de 0 a 5)
    const notaMedia = 4.5;

    // Função para gerar as estrelas coloridas de acordo com a nota média
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= notaMedia) {
                stars.push(<span key={i} className="star filled">&#9733;</span>); // Estrela cheia
            } else {
                stars.push(<span key={i} className="star">&#9734;</span>); // Estrela vazia
            }
        }
        return stars;
    };

    return (
        <>
            <Col>
                <Card className='mb-1'>
                    <Row>
                        <Col xs={2}>
                            <Card.Img variant="top" src={FotoPerfil} className="card-img-historico" />
                        </Col>
                        <Col xs={10} className="d-flex flex-column justify-content-center">
                            <Card.Body>
                                <Row className="d-flex flex-row text-center mb-3">
                                    <Col xs={7}><Card.Title className="titulo-card-servicoContratado ">Poliana Rocailks</Card.Title></Col>
                                    <Col xs={5}>{renderStars()}</Col>
                                </Row>
                                <Row className="d-flex flex-row justify-content-between align-items-center">
                                    <Col className='text-center'><Card.Text>Data: 25/02/2024</Card.Text></Col>
                                    <Col className='text-center'><Card.Text>Horário: 19h/22h</Card.Text></Col>
                                    <Col className='text-center'><Card.Text>Valor Pago: R$100,00</Card.Text></Col>
                                    <Col className='text-center'><Card.Text>Local: Contratante</Card.Text></Col>
                                </Row>
                                <Row className="justify-content-center mt-3">
                                    <Col sm={6}>
                                    <Button onClick={handleContratarClick} className="btnPrimary">Contratar novamente</Button>
                                    </Col>
                                    <Col sm={6}>
                                    <Button className="btnPrimary">Avaliar</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {showContratarModal && <ContratarModal onClose={() => setShowContratarModal(false)} />}                
            </Col>
        </>
    );
}
