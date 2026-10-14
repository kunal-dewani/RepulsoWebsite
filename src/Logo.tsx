import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary"]}>
        <div className={styles["div"]}>
          <div className={styles["div-2"]}>
            <p className={styles["p"]}>{slots[0] ?? "Menu"}</p>
          </div>
        </div>
      </div>
  )
}
