import styles from "./styles.module.css"

export default function Base2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["waiting"]}>
        <div className={styles["card"]}>
          <div className={styles["div-13"]}>
            <img className={styles["img-5"]} src={slots[0] ?? "https://framerusercontent.com/images/zNlXTrJ4dPbnu1ZOPogmLeTSg3Y.jpg?scale-down-to=512&width=736&height=736"} alt="" />
          </div>
        </div>
      </div>
  )
}
