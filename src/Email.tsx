import styles from "./styles.module.css"

export default function Email({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["large"]} href="mailto:altastudio@gmail.com">
        <div className={styles["main-content-wrapper"]}>
          <div className={styles["link"]}>
            <h4 className={styles["h4"]}>{slots[0] ?? "hello@repuslo.com"}</h4>
          </div>
          <div className={styles["line-4"]}>
            <div className={styles["line-1"]} />
            <div className={styles["line-2"]} />
          </div>
        </div>
      </a>
  )
}
