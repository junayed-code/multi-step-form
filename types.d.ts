type PlanOption = "monthly" | "yearly";
type Membership = "arcade" | "advanced" | "pro";
type Step =
  | "user-info"
  | "select-plan"
  | "add-one"
  | "summary"
  | "confirmation";
type ReducerActionType =
  | "next"
  | "back"
  | "confirm"
  | "setStepIndex"
  | "setUserinfo"
  | "selectPlan"
  | "setPlanOption"
  | "setTouched"
  | "addOptionalServices";

export type UserInfo = { name: string; email: string; phone: string };
type Errors = UserInfo;
type Touched = Record<keyof UserInfo, boolean>;

export interface ReducerAction {
  type: ReducerActionType;
  payload?: any;
}

export interface ReducerState {
  step: Step;
  index: number;
  planOption: PlanOption;
  membership: Membership;
  userinfo: UserInfo;
  errors: Errors;
  touched: Touched;
  optionalServices: {
    online: boolean;
    storage: boolean;
    customizable: boolean;
  };
}
