import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import GarifunaPhrases from "../../data/GarifunaPhrases";

function Phrases() {
  return (
    <PhrasesStyled>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="column1">Garifuna Phrase</th>
              <th className="column2">English Translation</th>
            </tr>
          </thead>
          <tbody>
            {GarifunaPhrases.map((Phrase) => {
              return (
                <tr key={Phrase.id}>
                  <td>{Phrase.garifuna}</td>
                  <td>{Phrase.translation}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </PhrasesStyled>
  );
}

const PhrasesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  table {
    border-collapse: collapse;
    width: 100%;
    .column1{
        width: 300px,
    }
  }

  th,
  td {
    border: .5px solid #ffffff;
    text-align: left;
    padding: 8px;
    font-size: 20px;
    width: 300px;
  }

  th {
    background-color: #e5e5e5;
  }

  td {
    background-color: #efd9a6;
  }
`;
export default Phrases;
