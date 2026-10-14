import styles from "./styles.module.css"

export default function ShaderMount({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-77"]}>
        <div className={styles["canvas"]} />
      </div>
  )
}
