import styles from "./styles.module.css"

export default function Base3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["waiting-2"]}>
        <div className={styles["card"]}>
          <div className={styles["div-13"]}>
            <img className={styles["img-6"]} src={slots[0] ?? "https://framerusercontent.com/images/uWgKdahd9dclv7Y5tPg5gsXKBb4.png?scale-down-to=512&width=1605&height=1191"} alt="" />
          </div>
        </div>
      </div>
  )
}
