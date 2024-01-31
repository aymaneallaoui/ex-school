/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// CoutPut.js

import React from 'react';
import { connect } from 'react-redux';

const CoutPut = ({ value1, value2, operation, result }) => {
  const displayString = `${value1} ${operation} ${value2} = ${result}`;
  let index = 0
  const operationIndex = (opeatio) => {

    if (opeatio === "+") {
      index = 1
    }
    if (opeatio === "-") {
      index = 2
    }
    if (opeatio === "*") {
      index = 3
    }
    if (opeatio === "/") {
      index = 4
    }

  }
  operationIndex(operation)


  return (
    <div>
      <p>Restitution de l'opération du store est comme suit:</p>
      <p>Résultat: {displayString}</p>
      <p>Le numéro de l'opération est: {index}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value1: state.value1,
  value2: state.value2,
  operation: state.operation,
  result: state.result,
});

export default connect(mapStateToProps)(CoutPut);
