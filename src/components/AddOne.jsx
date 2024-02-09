import { OPTIONAL_SERVICES } from "../config";
import { formatePrice } from "../utils/formatePrice";
import SidebarHeader from "./SidebarHeader";

function Service({ name, title, price, selected, onSelect, description }) {
  return (
    <label
      htmlFor={name}
      className={"flex cursor-pointer items-center gap-x-6 border px-5 py-4 rounded-lg hover:border-indigo-400 ".concat(
        selected ? "border-indigo-400" : "border-slate-300"
      )}
    >
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="inline-block w-5 h-5 cursor-pointer"
      />
      <div>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
      <p className="text-indigo-500 font-medium ml-auto">{price}</p>
    </label>
  );
}

function AddOne({ optionalServices, planOption, dispatch }) {
  const isYearlyPlan = planOption === "yearly";

  return (
    <>
      <SidebarHeader
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />

      <div className="space-y-4">
        {OPTIONAL_SERVICES.map(({ price, ...rest }) => (
          <Service
            {...rest}
            key={rest.name}
            price={formatePrice(price, isYearlyPlan)}
            selected={optionalServices[rest.name]}
            onSelect={e =>
              dispatch({
                type: "addOptionalServices",
                payload: { [e.target.name]: e.target.checked },
              })
            }
          />
        ))}
      </div>
    </>
  );
}

export default AddOne;
