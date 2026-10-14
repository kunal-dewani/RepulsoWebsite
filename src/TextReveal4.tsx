import styles from "./styles.module.css"

export default function TextReveal4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-96"]}>
        <div className={styles["p-36"]}>
          <div className={styles["div-97"]}>
            <div className={styles["div-98"] + " " + styles["rv-3"]} data-reveal>{slots[0] ?? "AI &"}</div>
          </div>
          <div className={styles["div-97"]}>
            <div className={styles["div-98"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "64ms" }}>{slots[1] ?? "Intelligent"}</div>
          </div>
          <div className={styles["div-97"]}>
            <div className={styles["div-98"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[2] ?? "Systems"}</div>
          </div>
        </div>
      </div>
  )
}
