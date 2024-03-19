import { Col, Container, Row } from "react-bootstrap";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

export function LayoutDash() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0" style={{height: "100vh"}}> {/* Definindo a altura do menu lateral */}
          <Header />
        </Col>
        <Col className="p-0 overflow-auto" style={{height: "calc(100vh)"}}> {/* Definindo a altura do conteúdo */}
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
