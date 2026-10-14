import styles from "./styles.module.css"

export default function TextReveal5({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-99"]}>
        <div className={styles["p-37"]}>
          <div className={styles["div-100"]}>
            <div className={styles["div-101"] + " " + styles["rv-3"]} data-reveal>{slots[0] ?? "Cloud,"}</div>
          </div>
          <div className={styles["div-100"]}>
            <div className={styles["div-101"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "64ms" }}>{slots[1] ?? "Infrastructure"}</div>
          </div>
          <div className={styles["div-100"]}>
            <div className={styles["div-101"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[2] ?? "& Security"}</div>
          </div>
        </div>
      </div>
  )
}
