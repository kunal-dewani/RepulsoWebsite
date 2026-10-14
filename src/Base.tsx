import styles from "./styles.module.css"

export default function Base({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["waiting"]}>
        <div className={styles["card"]}>
          <div className={styles["div-13"]}>
            <img className={styles["img-4"]} src={slots[0] ?? "https://framerusercontent.com/images/0CN0fHxNfhhT598COuLVuLJinLY.jpg?width=736&height=1308"} alt="" />
          </div>
        </div>
      </div>
  )
}
