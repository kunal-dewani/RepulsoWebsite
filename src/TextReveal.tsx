import styles from "./styles.module.css"

export default function TextReveal({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-73"]}>
        <h1 className={styles["h1"]}>
          <div className={styles["div-74"]}>
            <div className={styles["div-75"]}>{slots[0] ?? "Deeper look into"}</div>
          </div>
          <div className={styles["div-74"]}>
            <div className={styles["div-75"]}>{slots[1] ?? "our services"}</div>
          </div>
        </h1>
      </div>
  )
}
