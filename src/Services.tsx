import styles from "./styles.module.css"

export default function Services({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-4"]}>
        <div className={styles["main-container"]}>
          <div className={styles["div-11"]}>
            <p className={styles["p-9"]}>{slots[0] ?? "01"}</p>
          </div>
          <div className={styles["div-12"]}>
            <div className={styles["default"]}>
              <div className={styles["image-stack"]}>
                <div className={styles["card-1"]}>
                  <div className={styles["waiting"]}>
                    <div className={styles["card"]}>
                      <div className={styles["div-13"]}>
                        <img className={styles["img-4"]} src={slots[1] ?? "https://framerusercontent.com/images/0CN0fHxNfhhT598COuLVuLJinLY.jpg?width=736&height=1308"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["card-2"]}>
                  <div className={styles["waiting"]}>
                    <div className={styles["card"]}>
                      <div className={styles["div-13"]}>
                        <img className={styles["img-5"]} src={slots[2] ?? "https://framerusercontent.com/images/zNlXTrJ4dPbnu1ZOPogmLeTSg3Y.jpg?scale-down-to=512&width=736&height=736"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["card-3"]}>
                  <div className={styles["waiting-2"]}>
                    <div className={styles["card"]}>
                      <div className={styles["div-13"]}>
                        <img className={styles["img-6"]} src={slots[3] ?? "https://framerusercontent.com/images/uWgKdahd9dclv7Y5tPg5gsXKBb4.png?scale-down-to=512&width=1605&height=1191"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-14"]}>
            <div className={styles["div-15"]}>
              <h2 className={styles["h2"]}>{slots[4] ?? "SaaS & Digital Platforms"}</h2>
            </div>
            <div className={styles["div-16"]}>
              <p className={styles["p-10"]}>{slots[5] ?? "Building the systems behind modern businesses. We design and develop scalable SaaS products, web platforms and digital ecosystems — from the first idea to a product people actually use."}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
