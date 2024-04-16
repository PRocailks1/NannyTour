import React from 'react';
import { Modal } from 'react-bootstrap';
import CredenciamentoForm from './FormCredenciar';

export default function CredenciamentoModal({ onClose }) {
  return (
    <Modal show={true} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Solicitação de credenciamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CredenciamentoForm />
      </Modal.Body>
    </Modal>
  );
}
