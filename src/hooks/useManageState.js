import { useReducer } from "react";
import { validateUserinfo } from "../utils/validateUserinfo";

const STEPS = ["user-info", "select-plan", "add-one", "summary"];

/**@type {import('../../types').ReducerState} */
const initialState = {
  index: 0,
  step: "user-info",
  membership: "arcade",
  planOption: "monthly",
  userinfo: { name: "", email: "", phone: "" },
  errors: { name: "", email: "", phone: "" },
  touched: { name: false, email: false, phone: false },
  optionalServices: { online: false, storage: false, customizable: false },
};

/**
 *
 * @param {import('../../types').ReducerState} state
 * @param {import("../../types").ReducerAction} action
 * @returns {import('../../types').ReducerState}
 */
function reducer(state, action) {
  let index;
  let errors;

  switch (action.type) {
    case "next":
      index = state.index + 1;
      // Check userinfo validation
      if (state.step === "user-info") {
        const errors = validateUserinfo(state.userinfo);
        if (errors) {
          const touched = Object.fromEntries(
            Object.entries(state.touched).map(([key]) => [key, true])
          );
          return { ...state, errors, touched };
        }
        return {
          ...state,
          index,
          step: STEPS[index],
          errors: initialState.errors,
        };
      }
      return { ...state, index, step: STEPS[index] };
    case "back":
      index = state.index - 1;
      return { ...state, index, step: STEPS[index] };
    case "confirm":
      return { ...state, step: "confirmation" };
    case "setStepIndex":
      return { ...state, index: action.payload, step: STEPS[action.payload] };
    case "setUserinfo":
      const userinfo = { ...state.userinfo, ...action.payload };
      errors = validateUserinfo(userinfo);
      if (errors) {
        return { ...state, userinfo, errors };
      }
      return { ...state, userinfo, errors: initialState.errors };
    case "setTouched":
      const key = Object.keys(action.payload)[0];
      const error = validateUserinfo(state.userinfo)?.[key];
      return {
        ...state,
        touched: { ...state.touched, ...action.payload },
        errors: error ? { ...state.errors, [key]: error } : state.errors,
      };
    case "selectPlan":
      return { ...state, membership: action.payload };
    case "setPlanOption":
      return { ...state, planOption: action.payload };
    case "addOptionalServices":
      return {
        ...state,
        optionalServices: { ...state.optionalServices, ...action.payload },
      };
    default:
      throw new Error("Unknown action");
  }
}

export function useManageState() {
  return useReducer(reducer, initialState);
}
