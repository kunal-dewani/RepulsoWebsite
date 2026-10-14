import styles from "./styles.module.css"

export default function Grids({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["line"]} />
          <div className={styles["line-2"]} />
          <div className={styles["line-2"]} />
          <div className={styles["line-2"]} />
          <div className={styles["line"]} />
        </div>
      </div>
  )
}
