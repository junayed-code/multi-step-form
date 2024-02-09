import styles from "./styles.module.css";

/**
 *
 * @param {import("react").InputHTMLAttributes} param0
 */
function ToggleButton({ id, ...rest }) {
  return (
    <div className={styles.toggle}>
      <input {...rest} id={id} type="checkbox" />
      <label htmlFor={id}></label>
    </div>
  );
}

export default ToggleButton;
