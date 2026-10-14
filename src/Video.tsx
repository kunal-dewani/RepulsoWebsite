import styles from "./styles.module.css"

export default function Video({ slots = [] }: { slots?: string[] }) {
  return (
      <video className={styles["video"]} src="https://framerusercontent.com/assets/JLdAjvOLGB3q0UHH1Oe00adgzc.mp4" loop playsInline />
  )
}
