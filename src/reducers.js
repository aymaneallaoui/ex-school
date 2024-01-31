// reducers.js
const initialState = {
  value1: "",
  value2: "",
  operation: "+",
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VALUES":
      return {
        ...state,
        value1: action.payload.value1,
        value2: action.payload.value2,
        operation: action.payload.operation,
      };
    case "CALCULATE_RESULT":
      const num1 = parseFloat(state.value1);
      const num2 = parseFloat(state.value2);
      let result = 0;

      switch (state.operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          break;
      }

      return {
        ...state,
        result,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
