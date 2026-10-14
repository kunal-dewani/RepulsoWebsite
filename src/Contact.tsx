import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Contact({ slots = [] }: { slots?: string[] }) {
  return (
      <form className={styles["default-4"]}>
        <label className={styles["label"]}>
          <div className={styles["div-43"]}>
            <p className={styles["p-22"]}>{slots[0] ?? "Name"}</p>
          </div>
          <div className={styles["div-44"]}>
            <div className={styles["input"]} />
          </div>
        </label>
        <label className={styles["label"]}>
          <div className={styles["div-45"]}>
            <p className={styles["p-23"]}>{slots[1] ?? "Email"}</p>
          </div>
          <div className={styles["div-44"]}>
            <div className={styles["input"]} />
          </div>
        </label>
        <label className={styles["label-2"]}>
          <div className={styles["div-46"]}>
            <div className={styles["div-47"]}>
              <p className={styles["p-24"]}>{slots[2] ?? "Message"}</p>
            </div>
            <div className={styles["div-48"]}>
              <div className={styles["textarea"]} />
            </div>
          </div>
        </label>
        <div className={styles["div-49"]}>
          <button className={styles["primary-5"]}>
            <a className={styles["content-wrapper"]}>
              <div className={styles["bg"]} />
              <div className={styles["div-50"]}>
                <div className={styles["div-51"]}>
                  <p className={styles["p-25"]}>{slots[3] ?? "Submit"}</p>
                </div>
                <div className={styles["div-52"]}>
                  <SvgGraphic className={styles["svg-3"]} html={"<svg class=\"framer-SYorz framer-1n2t6p4\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-440329e8-61cf-4b33-8bdb-302f6851f875, rgb(250, 250, 250)); --js9iwy: 2; transform: translate(-50%, -50%); opacity: 1;\" data-f2c-idx=\"664\"><use href=\"#1175957644\" data-f2c-idx=\"665\"></use></svg>"} />
                </div>
              </div>
            </a>
          </button>
        </div>
        <div className={styles["check-mark"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
        <div className={styles["input-2"]} />
      </form>
  )
}
