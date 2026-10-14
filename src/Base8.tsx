import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base8({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["medium-2"]}>
        <a className={styles["main-container-5"]} href="./legal-pages/privacy-policy">
          <div className={styles["div-69"]}>
            <p className={styles["p-31"]}>{slots[0] ?? "Privacy Policy"}</p>
          </div>
          <div className={styles["arrow-up"]}>
            <div className={styles["div-34"]}>
              <div className={styles["div-35"]}>
                <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"744\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"745\"></use></svg>"} />
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}
