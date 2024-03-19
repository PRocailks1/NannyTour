import React, { useState } from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import logo from "../imagens/logo.png";
import { Link, useNavigate } from "react-router-dom";
import CadastroModal from "../componentes/CadastroModal";

export default function Login() {
  const navigate = useNavigate();
  const [showCadastroModal, setShowCadastroModal] = useState(false);
  const [usuario, setUsuario] = useState(""); // Estado para armazenar o valor do usuário
  const [senha, setSenha] = useState(""); // Estado para armazenar o valor da senha

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value); // Atualiza o estado com o valor do usuário digitado
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value); // Atualiza o estado com o valor da senha digitada
  };

  const handleEntrarClick = () => {
    // Lógica para autenticar o usuário
    // Por exemplo, se o usuário for Poliana e a senha for 123, navegue para a rota /listagemprestadoras
    if (usuario === "poliana" && senha === "123") {
      navigate("/listagemprestadoras"); // Navegue para a rota /listagemprestadoras
    } else {
      // Caso contrário, exiba uma mensagem de erro ou faça alguma outra ação
    }
  };

  const handleCadastroClick = () => {
    setShowCadastroModal(true);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center headerLogin">
        <Col className="col-auto"><img src={logo} alt="Logo NannyTour" className="logoLogin" /></Col>
      </Row>
      <Row className="justify-content-center ">
        <Col xs={{ span: 10, offset: 0 }} lg={{ span: 6, offset: 0 }}>
          <Card className="divFormLogin">
            <Card.Title className="text-center">
              <h4>Fazer login:</h4>
            </Card.Title>
            <Card.Body>
              <Form className="formLogin">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
                  <Form.Label column xs="3" md="2"><p>Nome:</p></Form.Label>
                  <Col xs="9" md="10">
                    <Form.Control type="text" size="lg" placeholder="Informe seu nome" value={usuario} onChange={handleUsuarioChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextSenha">
                  <Form.Label column xs="3" md="2"><p>Senha:</p></Form.Label>
                  <Col xs="9" md="10">
                    <Form.Control type="password" size="lg" placeholder="Informe sua senha" value={senha} onChange={handleSenhaChange} />
                  </Col>
                </Form.Group>
                <Row className="justify-content-center">
                  <Col sm="7" className="text-center">
                    <Button className="btnPrimary" onClick={handleEntrarClick}><a>Entrar</a></Button>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                  <Col sm="7" className="text-center">
                    <Link onClick={handleCadastroClick} className="link-Cadastrarse">Cadastrar-se</Link>
                  </Col>
                </Row>
                {showCadastroModal && <CadastroModal onClose={() => setShowCadastroModal(false)} />}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
