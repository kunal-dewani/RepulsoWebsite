import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base6({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["primary-5"]}>
        <a className={styles["content-wrapper"]}>
          <div className={styles["bg"]} />
          <div className={styles["div-50"]}>
            <div className={styles["div-51"]}>
              <p className={styles["p-25"]}>{slots[0] ?? "Submit"}</p>
            </div>
            <div className={styles["div-52"]}>
              <SvgGraphic className={styles["svg-3"]} html={"<svg class=\"framer-SYorz framer-1n2t6p4\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-440329e8-61cf-4b33-8bdb-302f6851f875, rgb(250, 250, 250)); --js9iwy: 2; transform: translate(-50%, -50%); opacity: 1;\" data-f2c-idx=\"664\"><use href=\"#1175957644\" data-f2c-idx=\"665\"></use></svg>"} />
            </div>
          </div>
        </a>
      </button>
  )
}
