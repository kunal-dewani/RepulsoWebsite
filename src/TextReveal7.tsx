import styles from "./styles.module.css"

export default function TextReveal7({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-105"]}>
        <h2 className={styles["h2-4"]}>
          <div className={styles["div-106"]}>
            <div className={styles["div-107"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "25ms" }}>{slots[0] ?? "Next"}</div>
            <div className={styles["div-108"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "25ms" }}>{slots[1] ?? "Service"}</div>
          </div>
        </h2>
      </div>
  )
}
