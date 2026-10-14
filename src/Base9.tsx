import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base9({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["secondary"]}>
        <a className={styles["content-wrapper-3"]} href="../work">
          <div className={styles["bg-2"]} />
          <div className={styles["div-109"]}>
            <div className={styles["div-110"]}>
              <p className={styles["p-38"]}>{slots[0] ?? "View all"}</p>
            </div>
            <div className={styles["div-111"]}>
              <SvgGraphic className={styles["svg-5"]} html={"<svg class=\"framer-SYorz framer-1n2t6p4\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-b3113b10-0fe0-418f-a28b-7d6daa1df890, rgb(23, 23, 23)); --js9iwy: 2; transform: translate(-50%, -50%); opacity: 1;\" data-f2c-idx=\"508\"><use href=\"#1175957644\" data-f2c-idx=\"509\"></use></svg>"} />
            </div>
          </div>
        </a>
      </button>
  )
}
