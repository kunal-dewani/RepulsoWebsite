import styles from "./styles.module.css"

export default function RollingText2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-71"]}>
        <div className={styles["p-27"]}>
          <span className={styles["span-5"]}>{slots[0] ?? "S"}</span>
          <span className={styles["span-4"]}>{slots[1] ?? "e"}</span>
          <span className={styles["span-10"]}>{slots[2] ?? "r"}</span>
          <span className={styles["span-4"]}>{slots[3] ?? "v"}</span>
          <span className={styles["span-11"]}>{slots[4] ?? "i"}</span>
          <span className={styles["span-12"]}>{slots[5] ?? "c"}</span>
          <span className={styles["span-4"]}>{slots[6] ?? "e"}</span>
          <span className={styles["span-8"]}>{slots[7] ?? "s"}</span>
        </div>
      </div>
  )
}
