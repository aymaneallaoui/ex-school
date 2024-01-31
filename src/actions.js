// actions.js
export const SET_VALUES = "SET_VALUES";
export const CALCULATE_RESULT = "CALCULATE_RESULT";

export const setValues = (value1, value2, operation) => ({
  type: SET_VALUES,
  payload: { value1, value2, operation },
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT,
});
