import styles from "./styles.module.css"

export default function Divider({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["appear"]}>
        <div className={styles["line-holder"]}>
          <div className={styles["line-3"]} />
        </div>
      </div>
  )
}
