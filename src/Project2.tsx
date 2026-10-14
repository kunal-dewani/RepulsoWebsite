import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Project2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default-6"]} href="./2">
        <div className={styles["main-container-7"]}>
          <div className={styles["img-wrapper-2"]}>
            <div className={styles["div-112"]}>
              <div className={styles["div-113"]}>
                <div className={styles["div-114"]} />
                <div className={styles["div-115"] + " " + styles["rv-4"]} data-reveal />
              </div>
            </div>
            <div className={styles["gradient-2"]} />
          </div>
          <div className={styles["content-wrapper-4"]}>
            <div className={styles["div-116"]}>
              <div className={styles["div-117"]}>
                <h6 className={styles["h6-2"]}>{slots[0] ?? "DESIGN STUDIO"}</h6>
              </div>
            </div>
            <div className={styles["service-year-2"]}>
              <div className={styles["div-118"]}>
                <p className={styles["p-39"]}>{slots[1] ?? "Content Systems"}</p>
              </div>
              <div className={styles["div-85"]}>
                <p className={styles["p-34"]}>{slots[2] ?? "·"}</p>
              </div>
              <div className={styles["div-119"]}>
                <p className={styles["p-40"]}>{slots[3] ?? "2026"}</p>
              </div>
            </div>
            <div className={styles["zoom-2"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-BwYzu framer-1mjcfls\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: rgb(0, 0, 0); --js9iwy: 2; transform: translate(-50%, -50%) rotate(45deg); opacity: 1;\" data-f2c-idx=\"532\"><use href=\"#3297562825\" data-f2c-idx=\"533\"></use></svg>"} />
            </div>
          </div>
        </div>
      </a>
  )
}
