import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function ServiceCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["first-item"]}>
        <div className={styles["text"]}>
          <div className={styles["ai-chatbots-conversational-agents-24-7-customer-support-lead-qualification-booking-systems-and-ai-sales-reps"]}>
            <div className={styles["p-2"]}>
              <strong className={styles["strong"]}>{slots[0] ?? "AI Workflow Automation."}</strong>
              {"Automate repetitive tasks across departments using intelligent triggers and decision logic."}
            </div>
          </div>
          <div className={styles["check-list"]}>
            <ul className={styles["check-list-2"]}>
              <li className={styles["icon"]}>
                <div className={styles["div-6"]}>
                  <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"74\"><use href=\"#svg10580641683\" data-f2c-idx=\"75\"></use></svg>"} />
                </div>
              </li>
              <li className={styles["workflow-mapping"]}>
                <p className={styles["p-3"]}>{slots[1] ?? "SaaS Products"}</p>
              </li>
            </ul>
            <ul className={styles["check-list-2"]}>
              <li className={styles["icon"]}>
                <div className={styles["div-6"]}>
                  <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"81\"><use href=\"#svg10580641683\" data-f2c-idx=\"82\"></use></svg>"} />
                </div>
              </li>
              <li className={styles["workflow-mapping-2"]}>
                <p className={styles["p-4"]}>{slots[2] ?? "Enterprise Platforms"}</p>
              </li>
            </ul>
            <ul className={styles["check-list-2"]}>
              <li className={styles["icon"]}>
                <div className={styles["div-6"]}>
                  <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"88\"><use href=\"#svg10580641683\" data-f2c-idx=\"89\"></use></svg>"} />
                </div>
              </li>
              <li className={styles["workflow-mapping-3"]}>
                <p className={styles["p-5"]}>{slots[3] ?? "Web and mobile Applications"}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["image"]}>
          <div className={styles["div-7"]}>
            <img className={styles["img-2"]} src={slots[4] ?? "https://framerusercontent.com/images/cgrW7f9W33xv3ZDvvKXaqAaaIL0.png?lossless=1&width=750&height=780"} alt="" />
          </div>
        </div>
      </div>
  )
}
