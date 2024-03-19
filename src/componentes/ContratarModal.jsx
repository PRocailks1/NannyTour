import React from 'react';
import { Modal } from 'react-bootstrap';
import ContratacaoServicoForm from './FormContratar';

export default function ContratarModal({ onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contratar babá</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContratacaoServicoForm />
      </Modal.Body>
    </Modal>
  );
}
