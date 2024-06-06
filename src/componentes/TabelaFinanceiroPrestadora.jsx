import React from 'react';
import { Table } from 'react-bootstrap';
import './TabelaFinanceiroPrestadora.css';

export default function TabelaFinanceiroPrestadora() {
  // Dados de exemplo
  const dados = [
    { contratante: 'João Silva', data: '01/05/2024', valor: 100, taxa: 10, valorLiq: 90 },
    { contratante: 'Maria Oliveira', data: '01/05/2024', valor: 200, taxa: 20, valorLiq: 180 },
    { contratante: 'Carlos Souza', data: '01/05/2024', valor: 150, taxa: 15, valorLiq: 135 },
  ];

  // Cálculo dos totalizadores
  const totalizadores = dados.reduce((totals, item) => {
    totals.qtde += 1;
    totals.valor += item.valor;
    totals.taxa += item.taxa;
    totals.valorLiq += item.valorLiq;
    return totals;
  }, { qtde: 0, valor: 0, taxa: 0, valorLiq: 0 });

  return (
    <Table striped borderless>
      <thead>
        <tr>
            <th>#</th>
            <th>Contratante</th>
            <th>Data Serv.</th>
            <th>Valor</th>
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
            <td>{item.valor.toFixed(2)}</td>
            <td>{item.taxa.toFixed(2)}</td>
            <td>{item.valorLiq.toFixed(2)}</td>
          </tr>
        ))}
        <tr  className="totalizador">
          <td>Qtde: {totalizadores.qtde}</td>
          <td colSpan={2}></td>
          <td>Valor: {totalizadores.valor.toFixed(2)}</td>
          <td>Taxa: {totalizadores.taxa.toFixed(2)}</td>
          <td>Valor Líq.: {totalizadores.valorLiq.toFixed(2)}</td>
          
        </tr>
      </tbody>
    </Table>
  );
}
