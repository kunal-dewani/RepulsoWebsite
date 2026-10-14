import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base5({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["idle-3"]}>
        <a className={styles["main-container-3"]} href="tel:+971505550173">
          <div className={styles["div-38"]}>
            <p className={styles["p-21"]}>{slots[0] ?? "+61 447828835"}</p>
          </div>
          <div className={styles["arrow-up"]}>
            <div className={styles["div-34"]}>
              <div className={styles["div-35"]}>
                <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"632\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"633\"></use></svg>"} />
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}
