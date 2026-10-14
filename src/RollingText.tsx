import styles from "./styles.module.css"

export default function RollingText({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-57"]}>
        <div className={styles["p-26"]}>
          <span className={styles["span"]}>{slots[0] ?? "H"}</span>
          <span className={styles["span-2"]}>{slots[1] ?? "o"}</span>
          <span className={styles["span-3"]}>{slots[2] ?? "m"}</span>
          <span className={styles["span-4"]}>{slots[3] ?? "e"}</span>
        </div>
      </div>
  )
}
