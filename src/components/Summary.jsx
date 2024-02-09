import { MEMBERSHIP_PLANS, OPTIONAL_SERVICES } from "../config";
import { formatePrice } from "../utils/formatePrice";
import SidebarHeader from "./SidebarHeader";

function Summary({ dispatch, membership, planOption, optionalServices }) {
  const isYearlyPlan = planOption === "yearly";

  const plan = MEMBERSHIP_PLANS.find(
    plan => plan.name.toLowerCase() === membership
  );
  const services = OPTIONAL_SERVICES.filter(
    service => optionalServices[service.name]
  );
  const servicesPrice = services.reduce(
    (accu, service) => accu + service.price,
    0
  );
  const totalPrice = plan.price + servicesPrice;

  return (
    <>
      <SidebarHeader
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />

      <div className="p-5 bg-slate-100 rounded-lg">
        <div className="grid grid-cols-4 gap-y-1">
          <h5 className="text-lg sm:text-xl font-medium col-span-3">
            {plan.name} ({isYearlyPlan ? "Yearly" : "Monthly"})
          </h5>
          <div className="col-span-3" style={{ gridRow: "2 / 3" }}>
            <a
              onClick={() => dispatch({ type: "setStepIndex", payload: 1 })}
              className="underline text-indigo-400 hover:text-indigo-600 duration-200 cursor-pointer"
            >
              Change
            </a>
          </div>
          <p className="row-span-2 text-xl font-bold flex justify-end items-center text-indigo-950">
            <span>{formatePrice(plan.price, isYearlyPlan)}</span>
          </p>
        </div>
        {!!services.length && <hr className="border-t-2 my-5" />}
        {/* Optional Services */}
        {services.map(service => (
          <p
            key={service.name}
            className="flex justify-between items-center font-medium mb-2 last:mb-0"
          >
            <span className="text-gray-400">{service.title}</span>
            <span className="text-gray-800">
              +{formatePrice(service.price, isYearlyPlan)}
            </span>
          </p>
        ))}
      </div>
      {/* Total calculation price */}
      <div className="py-6 px-5 flex items-center justify-between">
        <p className="text-gray-400 font-medium">
          Total (per {isYearlyPlan ? "year" : "month"})
        </p>
        <p className="font-bold text-2xl text-indigo-600">
          +{formatePrice(totalPrice, isYearlyPlan)}
        </p>
      </div>
    </>
  );
}

export default Summary;
