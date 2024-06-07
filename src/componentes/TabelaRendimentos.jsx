import React from 'react';
import { Table } from 'react-bootstrap';
import './TabelaFinanceiroPrestadora.css';

export default function TabelaRendimentos() {
  // Dados de exemplo
  const dados = [
    { prestadora: 'Maria da Silva', qtd: 7, valortot: 609},
    { prestadora: 'Camila Santos', qtd: 10, valortot: 870},
    { prestadora: 'Catia Pereira', qtd: 12, valortot: 1044},
  ];

  // Cálculo dos totalizadores
  const totalizadores = dados.reduce((totals, item) => {
    totals.qtde += 1;
    totals.qtdserv += item.qtd;
    totals.valor += item.valor;
    totals.taxa += item.valortot*0.15;
    totals.valortotal += item.valortot;
    return totals;
  }, { qtde: 0, valor: 0, taxa: 0, valortotal: 0, qtdserv: 0 });

  return (
    <Table striped borderless>
      <thead>
        <tr>
            <th>#</th>
            <th>Prestadora</th>
            <th>Horas</th>
            <th>Valor Total</th>
            <th>Total Taxa</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.prestadora}</td>
            <td>{item.qtd}</td>
            <td>{item.valortot.toFixed(2)}</td>
            <td>{(item.valortot.toFixed(2)*0.15).toFixed(2)}</td>
          </tr>
        ))}
        <tr  className="totalizador">
          <td>Qtde: {totalizadores.qtde}</td>
          <td colSpan={1}></td>
          <td>Total de horas: {totalizadores.qtdserv}</td>
          <td>Valor: {totalizadores.valortotal.toFixed(2)}</td>
          <td>Total taxas: {totalizadores.taxa.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
}
