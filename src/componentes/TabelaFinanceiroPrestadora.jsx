import React from 'react';
import { Table } from 'react-bootstrap';
import './TabelaFinanceiroPrestadora.css';

export default function TabelaFinanceiroPrestadora() {
  // Dados de exemplo
  const dados = [
    { contratante: 'João Silva', data: '01/05/2024', horas: 2},
    { contratante: 'Maria Oliveira', data: '01/05/2024', horas: 3},
    { contratante: 'Carlos Souza', data: '01/05/2024', horas: 2 },
  ];

  // Cálculo dos totalizadores
  const totalizadores = dados.reduce((totals, item) => {
    totals.qtde += 1;
    totals.horas += item.horas;
    return totals;
  }, { qtde: 0, horas: 0});

  return (
    <Table striped borderless>
      <thead>
        <tr>
            <th>#</th>
            <th>Contratante</th>
            <th>Data Serv.</th>
            <th>Horas</th>
            <th>Valor total serv.</th>
            <th>Taxa</th>
            <th>Valor Líq.</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.contratante}</td>
            <td>{item.data}</td>
            <td>{item.horas}</td>
            <td>{(item.horas*87).toFixed(2)}</td>
            <td>{((item.horas*87)*0.15).toFixed(2)}</td>
            <td>{((item.horas*87) - ((item.horas*87)*0.15)).toFixed(2)}</td>
          </tr>
        ))}
        <tr  className="totalizador">
          <td>Qtde: {totalizadores.qtde}</td>
          <td colSpan={2}></td>
          <td>Total horas: {totalizadores.horas}</td>
          <td>Valor: {(totalizadores.horas*87).toFixed(2)}</td>
          <td>Taxa: {((totalizadores.horas*87)*0.15).toFixed(2)}</td>
          <td>Valor Líq.: {((totalizadores.horas*87) - ((totalizadores.horas*87)*0.15)).toFixed(2)}</td>
          
        </tr>
      </tbody>
    </Table>
  );
}
