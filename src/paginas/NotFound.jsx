import { useCallback } from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Container fluid>
      <Row className="conteudo404">
        <Col className="aviso404">
        <h2>Opss... Essa página não existe!</h2>
        <p>Use o botão abaixo e volte para a página principal</p>
        </Col>
      </Row>
      <Row>
        <Col className="aviso404">
        <Button variant="secondary" size="lg" onClick={goHome}>Voltar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default memo(NotFound);
