import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["default-3"]}>
        <div className={styles["div-22"]}>
          <h2 className={styles["h2-2"]}>{slots[0] ?? "Stay Connected"}</h2>
        </div>
        <div className={styles["div-23"]}>
          <div className={styles["div-24"]}>
            <div className={styles["heading"]}>
              <div className={styles["div-25"]}>
                <div className={styles["div-26"]}>
                  <div className={styles["div-27"]}>
                    <p className={styles["p-17"]}>{slots[1] ?? "Start a conversation"}</p>
                  </div>
                  <div className={styles["div-28"]}>
                    <a className={styles["large"]} href="mailto:altastudio@gmail.com">
                      <div className={styles["main-content-wrapper"]}>
                        <div className={styles["link"]}>
                          <h4 className={styles["h4"]}>{slots[2] ?? "hello@repuslo.com"}</h4>
                        </div>
                        <div className={styles["line-4"]}>
                          <div className={styles["line-1"]} />
                          <div className={styles["line-2"]} />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-29"]}>
                    <div className={styles["div-30"]}>
                      <p className={styles["p-18"]}>{slots[3] ?? "India, New delhi"}</p>
                    </div>
                    <div className={styles["div-31"]}>
                      <div className={styles["div-32"]}>
                        <div className={styles["idle-2"]}>
                          <a className={styles["main-container-2"]} href="tel:+971505550173">
                            <div className={styles["div-33"]}>
                              <p className={styles["p-19"]}>{slots[4] ?? "+91 8076 787 761"}</p>
                            </div>
                            <div className={styles["arrow-up"]}>
                              <div className={styles["div-34"]}>
                                <div className={styles["div-35"]}>
                                  <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"620\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"621\"></use></svg>"} />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-36"]}>
                      <p className={styles["p-20"]}>{slots[5] ?? "Australia, Melbourne"}</p>
                    </div>
                    <div className={styles["div-37"]}>
                      <div className={styles["idle-3"]}>
                        <a className={styles["main-container-3"]} href="tel:+971505550173">
                          <div className={styles["div-38"]}>
                            <p className={styles["p-21"]}>{slots[6] ?? "+61 447828835"}</p>
                          </div>
                          <div className={styles["arrow-up"]}>
                            <div className={styles["div-34"]}>
                              <div className={styles["div-35"]}>
                                <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"632\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"633\"></use></svg>"} />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["div-39"]}>
              <div className={styles["div-40"]}>
                <div className={styles["div-41"]}>
                  <h3 className={styles["h3"]}>{slots[7] ?? "Let us know about your project"}</h3>
                </div>
              </div>
              <div className={styles["div-42"]}>
                <form className={styles["default-4"]}>
                  <label className={styles["label"]}>
                    <div className={styles["div-43"]}>
                      <p className={styles["p-22"]}>{slots[8] ?? "Name"}</p>
                    </div>
                    <div className={styles["div-44"]}>
                      <div className={styles["input"]} />
                    </div>
                  </label>
                  <label className={styles["label"]}>
                    <div className={styles["div-45"]}>
                      <p className={styles["p-23"]}>{slots[9] ?? "Email"}</p>
                    </div>
                    <div className={styles["div-44"]}>
                      <div className={styles["input"]} />
                    </div>
                  </label>
                  <label className={styles["label-2"]}>
                    <div className={styles["div-46"]}>
                      <div className={styles["div-47"]}>
                        <p className={styles["p-24"]}>{slots[10] ?? "Message"}</p>
                      </div>
                      <div className={styles["div-48"]}>
                        <div className={styles["textarea"]} />
                      </div>
                    </div>
                  </label>
                  <div className={styles["div-49"]}>
                    <button className={styles["primary-5"]}>
                      <a className={styles["content-wrapper"]}>
                        <div className={styles["bg"]} />
                        <div className={styles["div-50"]}>
                          <div className={styles["div-51"]}>
                            <p className={styles["p-25"]}>{slots[11] ?? "Submit"}</p>
                          </div>
                          <div className={styles["div-52"]}>
                            <SvgGraphic className={styles["svg-3"]} html={"<svg class=\"framer-SYorz framer-1n2t6p4\" role=\"presentation\" viewBox=\"0 0 24 24\" style=\"--1m973uw: var(--token-440329e8-61cf-4b33-8bdb-302f6851f875, rgb(250, 250, 250)); --js9iwy: 2; transform: translate(-50%, -50%); opacity: 1;\" data-f2c-idx=\"664\"><use href=\"#1175957644\" data-f2c-idx=\"665\"></use></svg>"} />
                          </div>
                        </div>
                      </a>
                    </button>
                  </div>
                  <div className={styles["check-mark"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                  <div className={styles["input-2"]} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["div-53"]}>
          <div className={styles["div-54"]}>
            <div className={styles["div-55"]}>
              <a className={styles["home"]} href="./">
                <div className={styles["div-56"]}>
                  <div className={styles["div-57"]}>
                    <div className={styles["p-26"]}>
                      <span className={styles["span"]}>{slots[12] ?? "H"}</span>
                      <span className={styles["span-2"]}>{slots[13] ?? "o"}</span>
                      <span className={styles["span-3"]}>{slots[14] ?? "m"}</span>
                      <span className={styles["span-4"]}>{slots[15] ?? "e"}</span>
                    </div>
                  </div>
                </div>
              </a>
              <a className={styles["work"]} href="./work">
                <div className={styles["div-58"]}>
                  <div className={styles["div-59"]}>
                    <div className={styles["p-27"]}>
                      <span className={styles["span-5"]}>{slots[16] ?? "S"}</span>
                      <span className={styles["span-4"]}>{slots[17] ?? "e"}</span>
                      <span className={styles["span-6"]}>{slots[18] ?? "r"}</span>
                      <span className={styles["span-4"]}>{slots[19] ?? "v"}</span>
                      <span className={styles["span-7"]}>{slots[20] ?? "i"}</span>
                      <span className={styles["span-4"]}>{slots[21] ?? "c"}</span>
                      <span className={styles["span-4"]}>{slots[22] ?? "e"}</span>
                      <span className={styles["span-8"]}>{slots[23] ?? "s"}</span>
                    </div>
                  </div>
                </div>
              </a>
              <a className={styles["home"]} href="./studio">
                <div className={styles["div-60"]}>
                  <div className={styles["div-61"]}>
                    <div className={styles["p-28"]}>
                      <span className={styles["span-5"]}>{slots[24] ?? "A"}</span>
                      <span className={styles["span-2"]}>{slots[25] ?? "b"}</span>
                      <span className={styles["span-2"]}>{slots[26] ?? "o"}</span>
                      <span className={styles["span-2"]}>{slots[27] ?? "u"}</span>
                      <span className={styles["span-6"]}>{slots[28] ?? "t"}</span>
                      <div className={styles["span-9"]} />
                      <span className={styles["span-2"]}>{slots[29] ?? "u"}</span>
                      <span className={styles["span-8"]}>{slots[30] ?? "s"}</span>
                    </div>
                  </div>
                </div>
              </a>
              <a className={styles["home"]} href="./contact">
                <div className={styles["div-62"]}>
                  <div className={styles["div-63"]}>
                    <div className={styles["p-29"]}>
                      <span className={styles["span-5"]}>{slots[31] ?? "C"}</span>
                      <span className={styles["span-2"]}>{slots[32] ?? "o"}</span>
                      <span className={styles["span-2"]}>{slots[33] ?? "n"}</span>
                      <span className={styles["span-6"]}>{slots[34] ?? "t"}</span>
                      <span className={styles["span-4"]}>{slots[35] ?? "a"}</span>
                      <span className={styles["span-4"]}>{slots[36] ?? "c"}</span>
                      <span className={styles["span-6"]}>{slots[37] ?? "t"}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["div-64"]}>
          <div className={styles["div-65"]}>
            <div className={styles["div-66"]}>
              <div className={styles["medium"]}>
                <a className={styles["main-container-4"]} href="./legal-pages/terms-of-service">
                  <div className={styles["div-67"]}>
                    <p className={styles["p-30"]}>{slots[38] ?? "Terms of service"}</p>
                  </div>
                  <div className={styles["arrow-up"]}>
                    <div className={styles["div-34"]}>
                      <div className={styles["div-35"]}>
                        <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"734\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"735\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["div-68"]}>
              <div className={styles["medium-2"]}>
                <a className={styles["main-container-5"]} href="./legal-pages/privacy-policy">
                  <div className={styles["div-69"]}>
                    <p className={styles["p-31"]}>{slots[39] ?? "Privacy Policy"}</p>
                  </div>
                  <div className={styles["arrow-up"]}>
                    <div className={styles["div-34"]}>
                      <div className={styles["div-35"]}>
                        <SvgGraphic className={styles["div-35"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"744\"><use href=\"#svg1220486354_379\" data-f2c-idx=\"745\"></use></svg>"} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles["div-70"]}>
            <p className={styles["p-32"]}>{slots[40] ?? "2026 Repulso. All rights reserved."}</p>
          </div>
        </div>
      </footer>
  )
}
