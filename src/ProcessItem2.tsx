import styles from "./styles.module.css"

export default function ProcessItem2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-2"]}>
        <div className={styles["right-2"]}>
          <div className={styles["container-4"]}>
            <div className={styles["discovery-audit-2"]}>
              <p className={styles["p-14"]}>{slots[0] ?? "Automation Blueprint"}</p>
            </div>
            <div className={styles["we-analyze-your-workflows-bottlenecks-and-revenue-opportunities-2"]}>
              <p className={styles["p-15"]}>{slots[1] ?? "We design a detailed automation architecture aligned with KPIs."}</p>
            </div>
          </div>
        </div>
        <div className={styles["center"]}>
          <div className={styles["div-18"]}>
            <div className={styles["active-2"]}>
              <div className={styles["dot-inner"] + " " + styles["rv-1"]} data-reveal>
                <div className={styles["circle"] + " " + styles["rv-2"]} data-reveal />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["left-2"]}>
          <div className={styles["container-2"]}>
            <div className={styles["icon-wrap-2"]}>
              <div className={styles["div-17"]} />
            </div>
            <div className={styles["background"]}>
              <div className={styles["01-2"]}>
                <p className={styles["p-16"]}>{slots[2] ?? "02"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
