import styles from "./styles.module.css"

export default function TextReveal2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-87"]}>
        <h3 className={styles["h3-2"]}>
          <div className={styles["div-88"]}>
            <div className={styles["div-89"]}>{slots[0] ?? "PRODUCT"}</div>
            <div className={styles["div-90"]}>{slots[1] ?? "&"}</div>
          </div>
          <div className={styles["div-88"]}>
            <div className={styles["div-91"]}>{slots[2] ?? "DIGITAL"}</div>
          </div>
          <div className={styles["div-88"]}>
            <div className={styles["div-92"]}>{slots[3] ?? "STRATEGY"}</div>
          </div>
        </h3>
      </div>
  )
}
