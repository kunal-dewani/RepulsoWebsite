import styles from "./styles.module.css"

export default function ProcessItem({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["active"]}>
        <div className={styles["left"]}>
          <div className={styles["container-2"]}>
            <div className={styles["icon-wrap-2"]}>
              <div className={styles["div-17"]} />
            </div>
            <div className={styles["background"]}>
              <div className={styles["01"]}>
                <p className={styles["p-11"]}>{slots[0] ?? "01"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["center"]}>
          <div className={styles["frame-top"]} />
          <div className={styles["div-18"]}>
            <div className={styles["active-2"]}>
              <div className={styles["dot-inner"]}>
                <div className={styles["circle"]} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["container-3"]}>
            <div className={styles["discovery-audit"]}>
              <p className={styles["p-12"]}>{slots[1] ?? "Discovery & Audit"}</p>
            </div>
            <div className={styles["we-analyze-your-workflows-bottlenecks-and-revenue-opportunities"]}>
              <p className={styles["p-13"]}>{slots[2] ?? "We analyze your business workflows, bottlenecks, and revenue opportunities."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
