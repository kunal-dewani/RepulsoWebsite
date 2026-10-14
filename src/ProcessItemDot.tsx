import styles from "./styles.module.css"

export default function ProcessItemDot({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["active-2"]}>
        <div className={styles["dot-inner"]}>
          <div className={styles["circle"]} />
        </div>
      </div>
  )
}
