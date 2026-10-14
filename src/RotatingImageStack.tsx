import styles from "./styles.module.css"

export default function RotatingImageStack({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default"]}>
        <div className={styles["image-stack"]}>
          <div className={styles["card-1"]}>
            <div className={styles["waiting"]}>
              <div className={styles["card"]}>
                <div className={styles["div-13"]}>
                  <img className={styles["img-4"]} src={slots[0] ?? "https://framerusercontent.com/images/0CN0fHxNfhhT598COuLVuLJinLY.jpg?width=736&height=1308"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["card-2"]}>
            <div className={styles["waiting"]}>
              <div className={styles["card"]}>
                <div className={styles["div-13"]}>
                  <img className={styles["img-5"]} src={slots[1] ?? "https://framerusercontent.com/images/zNlXTrJ4dPbnu1ZOPogmLeTSg3Y.jpg?scale-down-to=512&width=736&height=736"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["card-3"]}>
            <div className={styles["waiting-2"]}>
              <div className={styles["card"]}>
                <div className={styles["div-13"]}>
                  <img className={styles["img-6"]} src={slots[2] ?? "https://framerusercontent.com/images/uWgKdahd9dclv7Y5tPg5gsXKBb4.png?scale-down-to=512&width=1605&height=1191"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
