/**
 *
 * @param {{dispatch: import("react").Dispatch<import("../../types").ReducerAction>, step: import("../../types").Step}} param0
 * @returns
 */
function NavigationButtons({ dispatch, step }) {
  return (
    <div
      className={"absolute md:static flex justify-between items-center mt-8 lg:mt-auto bottom-0 left-0 right-0".concat(
        step !== "confirmation" ? " p-[1rem_1.5rem] md:p-0 bg-white" : ""
      )}
    >
      {/* Go Back Button */}
      <button
        onClick={() => dispatch({ type: "back" })}
        className={"px-4 py-2.5 bg-transparent text-slate-400 hover:text-slate-700 duration-150 font-medium".concat(
          ["user-info", "confirmation"].includes(step) ? " hidden" : ""
        )}
      >
        Go Back
      </button>

      {/* Next Step Button */}
      <button
        onClick={() => dispatch({ type: "next" })}
        className={"px-4 py-2.5 bg-cyan-950 hover:bg-cyan-800 text-slate-100 rounded-md ml-auto duration-150".concat(
          ["summary", "confirmation"].includes(step) ? " hidden" : ""
        )}
      >
        Next Step
      </button>

      {/* Confirm button */}
      <button
        onClick={() => dispatch({ type: "confirm" })}
        className={"px-6 py-2.5 bg-indigo-600 hover:opacity-70 text-slate-100 rounded-md ml-auto duration-200".concat(
          step === "summary" ? "" : " hidden"
        )}
      >
        Confirm
      </button>
    </div>
  );
}

export default NavigationButtons;
