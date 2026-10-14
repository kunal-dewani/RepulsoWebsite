import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Base7({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["medium"]}>
        <a className={styles["main-container-4"]} href="./legal-pages/terms-of-service">
          <div className={styles["div-67"]}>
            <p className={styles["p-30"]}>{slots[0] ?? "Terms of service"}</p>
          </div>
          <div className={styles["arrow-up"]}>
            <div className={styles["div-34"]}>
              <div className={styles["div-35"]}>
                <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"734\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"735\"></use></svg>"} />
              </div>
            </div>
          </div>
        </a>
      </div>
  )
}
