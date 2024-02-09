import AddOne from "./AddOne";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import UserInfo from "./UserInfo";
import SelectPlan from "./SelectPlan";
import Confirmation from "./Confirmation";
import NavigationButtons from "./NavigationButtons";
import Main from "./composition/Main";
import Container from "./composition/Container";
import SidebarContainer from "./composition/SidebarContainer";

import { useManageState } from "../hooks/useManageState";

function App() {
  const [state, dispatch] = useManageState();
  const { step, userinfo, planOption, membership, optionalServices } = state;

  return (
    <Main>
      <Container>
        <Sidebar index={state.index} />
        <SidebarContainer>
          {step === "user-info" && (
            <UserInfo
              userinfo={userinfo}
              dispatch={dispatch}
              errors={state.errors}
              touched={state.touched}
            />
          )}
          {step === "select-plan" && (
            <SelectPlan
              dispatch={dispatch}
              planOption={planOption}
              membership={membership}
            />
          )}
          {step === "add-one" && (
            <AddOne
              dispatch={dispatch}
              planOption={planOption}
              optionalServices={optionalServices}
            />
          )}
          {step === "summary" && (
            <Summary
              dispatch={dispatch}
              planOption={planOption}
              membership={membership}
              optionalServices={optionalServices}
            />
          )}
          {step === "confirmation" && <Confirmation />}
          <NavigationButtons dispatch={dispatch} step={step} />
        </SidebarContainer>
      </Container>
    </Main>
  );
}

export default App;
