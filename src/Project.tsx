import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Project({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default-5"]} href="./projects/1">
        <div className={styles["main-container-6"]}>
          <div className={styles["img-wrapper"]}>
            <div className={styles["div-78"]}>
              <div className={styles["div-79"]}>
                <div className={styles["div-80"]} />
                <div className={styles["div-81"]} />
              </div>
            </div>
            <div className={styles["gradient"]} />
          </div>
          <div className={styles["content-wrapper-2"]}>
            <div className={styles["div-82"]}>
              <div className={styles["div-83"]}>
                <h6 className={styles["h6"]}>{slots[0] ?? "PRODUCT & DIGITAL STRATEGY"}</h6>
              </div>
            </div>
            <div className={styles["service-year"]}>
              <div className={styles["div-84"]}>
                <p className={styles["p-33"]}>{slots[1] ?? "Brand Identity"}</p>
              </div>
              <div className={styles["div-85"]}>
                <p className={styles["p-34"]}>{slots[2] ?? "·"}</p>
              </div>
              <div className={styles["div-86"]}>
                <p className={styles["p-35"]}>{slots[3] ?? "2025"}</p>
              </div>
            </div>
            <div className={styles["zoom"]}>
              <SvgGraphic className={styles["svg-4"]} html={"<svg class=\"framer-BwYzu framer-1mjcfls\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: rgb(0, 0, 0); --js9iwy: 2; transform: translate(-50%, -50%) rotate(45deg); opacity: 1;\" data-f2c-idx=\"79\"><use href=\"#3297562825\" data-f2c-idx=\"80\"></use></svg>"} />
            </div>
          </div>
        </div>
      </a>
  )
}
