import ToggleButton from "./shared/ToggleButton";
import SidebarHeader from "./SidebarHeader";
import { MEMBERSHIP_PLANS } from "../config";
import { formatePrice } from "../utils/formatePrice";

function SelectPlan({ membership, planOption, dispatch }) {
  const isYearlyPlan = planOption === "yearly";
  return (
    <>
      <SidebarHeader
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />

      <div className="flex flex-col lg:flex-row gap-4">
        {MEMBERSHIP_PLANS.map(plan => (
          <Plan
            price={formatePrice(plan.price, isYearlyPlan)}
            planName={plan.name}
            logoImg={plan.logo}
            key={plan.name}
            planOption={planOption}
            isSelect={membership === plan.name.toLowerCase()}
            onSelectPlan={() =>
              dispatch({ type: "selectPlan", payload: plan.name.toLowerCase() })
            }
          />
        ))}
      </div>

      <div className="mt-8 py-3 px-2 flex items-center justify-center gap-x-7 bg-indigo-50 rounded-md">
        <span
          className={`font-bold${
            planOption === "monthly" ? "" : " text-slate-400"
          }`}
        >
          Monthly
        </span>
        <ToggleButton
          id="plan-option"
          checked={planOption === "yearly"}
          onChange={e =>
            dispatch({
              type: "setPlanOption",
              payload: e.target.checked ? "yearly" : "monthly",
            })
          }
        />
        <span
          className={`font-bold${
            planOption === "yearly" ? "" : " text-slate-400"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
}

function Plan({
  price,
  logoImg,
  planName,
  planOption,
  isSelect,
  onSelectPlan,
}) {
  return (
    <div
      onClick={onSelectPlan}
      className={"flex lg:flex-col gap-x-5 gap-y-12 p-5 relative border rounded-lg w-full cursor-pointer hover:border-indigo-400 duration-200 ".concat(
        isSelect ? "border-indigo-400" : "border-slate-300"
      )}
    >
      <img
        width={40}
        height={40}
        className="lg:self-start"
        src={logoImg}
        alt={planName}
      />
      <div>
        <p className="font-bold text-lg">{planName}</p>
        <p className="font-medium text-slate-400">{price}</p>
        {planOption === "yearly" && (
          <p className="font-medium text-blue-950 mt-1">2 months free</p>
        )}
      </div>
    </div>
  );
}

export default SelectPlan;
