import styles from "./styles.module.css"

export default function TextReveal6({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-102"]}>
        <h3 className={styles["h3-3"]}>
          <div className={styles["div-103"]}>
            <div className={styles["div-104"] + " " + styles["rv-3"]} data-reveal>{slots[0] ?? "Challenge"}</div>
          </div>
        </h3>
      </div>
  )
}
