import React from 'react';
import { Modal } from 'react-bootstrap';
import Cadastro from './FormCadastroSimples';

export default function CadastroModal({ onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title><h2>Cadastro</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Cadastro/>
      </Modal.Body>
    </Modal>
  );
}
