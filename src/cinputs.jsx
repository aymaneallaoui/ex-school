/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// Cinputs.js

import { calculateResult, setValues } from './actions';

import { connect } from 'react-redux';

const Cinputs = ({ dispatch, operation }) => {
    let value1Input, value2Input, operationInput;

    const handleChange = (selectedOperation) => {
        dispatch(setValues(value1Input.value, value2Input.value, selectedOperation));
        dispatch(calculateResult());
    };

    return (
        <div>
            <label htmlFor='Valeur1'>Valeur1</label>
            <input
                type='text'
                id='Valeur1'
                name='Valeur1'
                ref={(input) => (value1Input = input)}
                onChange={() => handleChange(operation)}
            />
            <label htmlFor='Valeur2'>Valeur2</label>
            <input
                type='text'
                id='Valeur2'
                name='Valeur2'
                ref={(input) => (value2Input = input)}
                onChange={() => handleChange(operation)}
            />
            <label htmlFor='+'>+</label>
            <input
                type='radio'
                id='+'
                name='operation'
                value='+'
                ref={(input) => (operationInput = input)}
                onChange={() => handleChange('+')}
                checked={operation === '+'}
            />
            <label htmlFor='-'>-</label>
            <input
                type='radio'
                id='-'
                name='operation'
                value='-'
                ref={(input) => (operationInput = input)}
                onChange={() => handleChange('-')}
                checked={operation === '-'}
            />
            <label htmlFor='*'>*</label>
            <input
                type='radio'
                id='*'
                name='operation'
                value='*'
                ref={(input) => (operationInput = input)}
                onChange={() => handleChange('*')}
                checked={operation === '*'}
            />
            <label htmlFor='/'>/</label>
            <input
                type='radio'
                id='/'
                name='operation'
                value='/'
                ref={(input) => (operationInput = input)}
                onChange={() => handleChange('/')}
                checked={operation === '/'}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    operation: state.operation,
});

export default connect(mapStateToProps)(Cinputs);
