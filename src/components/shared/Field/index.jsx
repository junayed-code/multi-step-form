import styles from "./styles.module.css";

/**
 *
 * @param {import("react").InputHTMLAttributes & {label: string error: string}} param0
 */
function Field({ id, name = id, type = "text", label, error, ...rest }) {
  return (
    <label htmlFor={id} className={styles.formControl}>
      <div>
        <span>{label}</span>
        <span>{error}</span>
      </div>
      <input
        {...rest}
        id={id}
        name={name}
        type={type}
        data-error={!!error}
        className={styles.input}
      />
    </label>
  );
}

export default Field;
