import { useReducer } from "react";

const initialStateValue = { value: "", isTouched: false };
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "rand ka jamai", isTouched: false };
  }
  return initialStateValue;
};

const useInput = (validate) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialStateValue
  );

  const valueIsValid = validate(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInputState({ type: "INPUT", value: event.target.value });
  };

  const valueIsTouchedHandler = () => {
    dispatchInputState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError: hasError,
    valueIsValid,
    valueChangeHandler,
    valueIsTouchedHandler,
    reset,
  };
};

export default useInput;
