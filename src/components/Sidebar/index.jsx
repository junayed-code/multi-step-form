import styles from "./styles.module.css";

const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

function Step({ index, title, active }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center">
      <div
        className={"rounded-full w-10 h-10 text-lg flex justify-center items-center font-bold border-2 border-indigo-100 ".concat(
          active ? "bg-blue-200 text-indigo-900" : "text-indigo-100"
        )}
      >
        {index}
      </div>
      <div className="uppercase text-center lg:text-left font-medium hidden md:block">
        <span className="text-indigo-300">step {index}</span>
        <h5 className="text-lg">{title}</h5>
      </div>
    </div>
  );
}

/**
 *
 * @param {{ index: number }} param0
 */
function Sidebar({ index }) {
  return (
    <aside className={styles.sidebar}>
      {steps.map((step, inx) => (
        <Step key={step} index={inx + 1} title={step} active={index === inx} />
      ))}
    </aside>
  );
}

export default Sidebar;
