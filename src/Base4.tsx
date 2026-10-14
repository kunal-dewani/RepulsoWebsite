import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base4({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["idle-2"]}>
        <a className={styles["main-container-2"]} href="tel:+971505550173">
          <div className={styles["div-33"]}>
            <p className={styles["p-19"]}>{slots[0] ?? "+91 8076 787 761"}</p>
          </div>
          <div className={styles["arrow-up"]}>
            <div className={styles["div-34"]}>
              <div className={styles["div-35"]}>
                <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"620\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"621\"></use></svg>"} />
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}
