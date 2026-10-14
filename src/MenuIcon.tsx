import styles from "./styles.module.css"

export default function MenuIcon({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["idle"]}>
        <div className={styles["div-3"]}>
          <div className={styles["top-cubes"]}>
            <div className={styles["div-4"]}>
              <div className={styles["div-5"]}>
                <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/dgdmO2tWTcw3khvB2gsxByYv1dM.png?width=531&height=567"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
