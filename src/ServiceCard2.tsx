import styles from "./styles.module.css"

export default function ServiceCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["primary-2"]}>
        <div className={styles["text-2"]}>
          <div className={styles["ai-chatbots-conversational-agents-24-7-customer-support-lead-qualification-booking-systems-and-ai-sales-reps-2"]}>
            <div className={styles["p-6"]}>
              <strong className={styles["strong"]}>{slots[0] ?? "Built secure. From the start."}</strong>
            </div>
            <p className={styles["p-7"]}>{slots[1] ?? "We build security into the architecture, experience and technology from the beginning."}</p>
          </div>
        </div>
        <div className={styles["image-2"]}>
          <div className={styles["div-8"]}>
            <img className={styles["img-3"]} src={slots[2] ?? "https://framerusercontent.com/images/JoLUJzWcifYswzE6msfHXW4QOg.png?lossless=1&width=648&height=288"} alt="" />
          </div>
        </div>
      </div>
  )
}
