import styles from "./styles.module.css"

export default function TextReveal3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-93"]}>
        <h2 className={styles["h2-3"]}>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[0] ?? "Turning ambitious ideas into"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[1] ?? "technology with direction. Product"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[2] ?? "Strategy · Digital Transformation ·"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[3] ?? "Technology Strategy · Product"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[4] ?? "Discovery · Innovation · Technology"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[5] ?? "Audits · Roadmaps · Business"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[6] ?? "Consulting · AI Strategy · MVP"}</div>
          </div>
          <div className={styles["div-94"]}>
            <div className={styles["div-95"]}>{slots[7] ?? "Strategy"}</div>
          </div>
        </h2>
      </div>
  )
}
