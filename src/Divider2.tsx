import styles from "./styles.module.css"

export default function Divider2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["lighter-appear"]}>
        <div className={styles["line-holder-2"]}>
          <div className={styles["line-5"]} />
        </div>
      </div>
  )
}
