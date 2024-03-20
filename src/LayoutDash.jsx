// LayoutDash.jsx
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./layout/HeaderDesktop";
import MenuFooter from "./layout/MenuFooter";
import { Outlet } from "react-router-dom";
import './LayoutDash.css';

export function LayoutDash() {
  const isMobile = window.innerWidth >= 1200;

  return (
    <>
      {isMobile ? (
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
      ) : (
        <Container fluid >
          <Row className="listagem-mobile">
            <Col className="p-0 overflow-auto" style={{ minHeight: "calc(100vh - 80px)" }}>
              <Outlet />
            </Col>
          </Row>
          <Row>
            <Col>
              <MenuFooter />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
