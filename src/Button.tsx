import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary-3"]} href="./">
        <div className={styles["button-inner"]}>
          <div className={styles["div-9"]}>
            <div className={styles["text-3"]}>
              <p className={styles["p-8"]}>{slots[0] ?? "Schedule a Session"}</p>
            </div>
            <div className={styles["text-3"]}>
              <p className={styles["p-8"]}>{slots[1] ?? "Schedule a Session"}</p>
            </div>
          </div>
          <div className={styles["icon-wrap"]}>
            <div className={styles["icon-2"]}>
              <div className={styles["icon-3"]}>
                <div className={styles["div-10"]}>
                  <SvgGraphic className={styles["svg-2"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"176\"><use href=\"#svg10836317667\" data-f2c-idx=\"177\"></use></svg>"} />
                </div>
              </div>
            </div>
            <div className={styles["icon-2"]}>
              <div className={styles["icon-3"]}>
                <div className={styles["div-10"]}>
                  <SvgGraphic className={styles["svg-2"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"181\"><use href=\"#svg10836317667\" data-f2c-idx=\"182\"></use></svg>"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
