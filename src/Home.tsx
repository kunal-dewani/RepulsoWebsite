import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Logo from "./Logo"
import MenuIcon from "./MenuIcon"
import Video from "./Video"
import Grids from "./Grids"
import ServiceCard from "./ServiceCard"
import ServiceCard2 from "./ServiceCard2"
import Button from "./Button"
import Services from "./Services"
import RotatingImageStack from "./RotatingImageStack"
import Base from "./Base"
import Base2 from "./Base2"
import Base3 from "./Base3"
import Divider from "./Divider"
import ProcessItem from "./ProcessItem"
import Magnife from "./Magnife"
import ProcessItemDot from "./ProcessItemDot"
import ProcessItem2 from "./ProcessItem2"
import Structure from "./Structure"
import Settings from "./Settings"
import RoundGraph from "./RoundGraph"
import Rocket from "./Rocket"
import NextSmoothScroll from "./NextSmoothScroll"
import Footer from "./Footer"
import Email from "./Email"
import Base4 from "./Base4"
import Base5 from "./Base5"
import Contact from "./Contact"
import Base6 from "./Base6"
import ArrowRight from "./ArrowRight"
import RollingText from "./RollingText"
import RollingText2 from "./RollingText2"
import Base7 from "./Base7"
import Base8 from "./Base8"
import Main2 from "./Main2"
import Framer from "./Framer"
import Text from "./Text"
import TextReveal from "./TextReveal"
import GrainGradient from "./GrainGradient"
import ShaderMount from "./ShaderMount"
import Project from "./Project"
import ImageParallax from "./ImageParallax"
import ChevronsDownUp from "./ChevronsDownUp"
import TextReveal2 from "./TextReveal2"
import TextReveal3 from "./TextReveal3"
import TextReveal4 from "./TextReveal4"
import TextReveal5 from "./TextReveal5"
import Divider2 from "./Divider2"
import TextReveal6 from "./TextReveal6"
import TextReveal7 from "./TextReveal7"
import Base9 from "./Base9"
import Project2 from "./Project2"
import ImageParallax2 from "./ImageParallax2"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-120"]}>
        <div className={styles["div-121"]}>
          <div className={styles["div-122"]}>
            <div className={styles["div-123"]}>
              <States
                a={<>
                  <nav className={styles["idle-4"]}>
                    <div className={styles["main-content-wrapper-2"]}>
                      <div className={styles["logo-and-menu"]}>
                        <div className={styles["div-124"]}>
                          <Logo slots={["Menu"]} />
                        </div>
                        <div className={styles["div-125"]}>
                          <MenuIcon slots={["https://framerusercontent.com/images/dgdmO2tWTcw3khvB2gsxByYv1dM.png?width=531&height=567"]} />
                        </div>
                      </div>
                    </div>
                  </nav>
                </>}
                b={<>
                  <nav className={styles["clicked"]}>
                    <div className={styles["main-content-wrapper-3"]}>
                      <div className={styles["logo-and-menu-2"]}>
                        <div className={styles["div-124"]}>
                          <Logo slots={["Menu"]} />
                        </div>
                        <div className={styles["div-125"]}>
                          <MenuIcon slots={["https://framerusercontent.com/images/dgdmO2tWTcw3khvB2gsxByYv1dM.png?width=531&height=567"]} />
                        </div>
                      </div>
                      <div className={styles["links-socials-contacts"]}>
                        <div className={styles["nav-links"]}>
                          <a className={styles["home-2"]} href="./">
                            <div className={styles["home-link"]}>
                              <div className={styles["div-126"]}>
                                <div className={styles["div-127"]}>
                                  <div className={styles["p-41"]}>
                                    <span className={styles["span-14"]}>{"H"}</span>
                                    <span className={styles["span-15"]}>{"o"}</span>
                                    <span className={styles["span-16"]}>{"m"}</span>
                                    <span className={styles["span-15"]}>{"e"}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className={styles["work-2"]} href="./work">
                            <div className={styles["div-126"]}>
                              <div className={styles["div-127"]}>
                                <div className={styles["p-41"]}>
                                  <span className={styles["span-15"]}>{"S"}</span>
                                  <span className={styles["span-15"]}>{"e"}</span>
                                  <span className={styles["span-17"]}>{"r"}</span>
                                  <span className={styles["span-18"]}>{"v"}</span>
                                  <span className={styles["span-19"]}>{"i"}</span>
                                  <span className={styles["span-20"]}>{"c"}</span>
                                  <span className={styles["span-15"]}>{"e"}</span>
                                  <span className={styles["span-18"]}>{"s"}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className={styles["home-2"]} href="./studio">
                            <div className={styles["div-126"]}>
                              <div className={styles["div-127"]}>
                                <div className={styles["p-41"]}>
                                  <span className={styles["span-21"]}>{"A"}</span>
                                  <span className={styles["span-15"]}>{"b"}</span>
                                  <span className={styles["span-15"]}>{"o"}</span>
                                  <span className={styles["span-15"]}>{"u"}</span>
                                  <span className={styles["span-22"]}>{"t"}</span>
                                  <div className={styles["span-23"]} />
                                  <span className={styles["span-15"]}>{"u"}</span>
                                  <span className={styles["span-18"]}>{"s"}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className={styles["home-2"]} href="./contact">
                            <div className={styles["div-128"]}>
                              <div className={styles["div-127"]}>
                                <div className={styles["p-41"]}>
                                  <span className={styles["span-21"]}>{"C"}</span>
                                  <span className={styles["span-15"]}>{"o"}</span>
                                  <span className={styles["span-15"]}>{"n"}</span>
                                  <span className={styles["span-22"]}>{"t"}</span>
                                  <span className={styles["span-15"]}>{"a"}</span>
                                  <span className={styles["span-20"]}>{"c"}</span>
                                  <span className={styles["span-22"]}>{"t"}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className={styles["socials-contacts"]}>
                          <div className={styles["contacts"]}>
                            <div className={styles["div-129"]}>
                              <p className={styles["p-42"]}>{"Contacts"}</p>
                            </div>
                            <div className={styles["div-130"]}>
                              <div className={styles["div-131"]}>
                                <Base5 slots={["+91 8076787761"]} />
                              </div>
                              <div className={styles["email"]}>
                                <div className={styles["div-132"]}>
                                  <a className={styles["small"]} href="mailto:altastudio@gmail.com">
                                    <div className={styles["main-content-wrapper-4"]}>
                                      <div className={styles["link-2"]}>
                                        <p className={styles["p-43"]}>{"hello@repulso.com"}</p>
                                      </div>
                                      <div className={styles["line-6"]}>
                                        <div className={styles["line-1-2"]} />
                                        <div className={styles["line-2-2"]} />
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["cta"]}>
                        <div className={styles["div-133"]}>
                          <a className={styles["default-7"]} href="./contact">
                            <div className={styles["left-3"]}>
                              <div className={styles["arrow"]}>
                                <div className={styles["div-134"]}>
                                  <div className={styles["div-135"]}>
                                    <SvgGraphic className={styles["div-135"]} html={"<svg style=\"width:100%;height:100%;overflow: visible;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\"><use href=\"#svg135665101_395\"></use></svg>"} />
                                  </div>
                                </div>
                              </div>
                              <div className={styles["color"]} />
                            </div>
                            <div className={styles["inner-surface"]}>
                              <div className={styles["div-136"]}>
                                <p className={styles["p-44"]}>{"Get started"}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </>}
              />
            </div>
          </div>
          <div className={styles["div-137"]}>
            <section className={styles["section-hero"]}>
              <div className={styles["video-wrapper"]}>
                <div className={styles["div-138"]}>
                  <Video slots={[]} />
                </div>
              </div>
              <div className={styles["container-5"]}>
                <div className={styles["heading-container"]}>
                  <div className={styles["inner-container"]}>
                    <div className={styles["spacer"]} />
                  </div>
                </div>
                <div className={styles["subtext-and-button-container"]}>
                  <div className={styles["div-139"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-140"]}>
                        <div className={styles["div-141"]}>
                          <img className={styles["img-7"]} src={slots[0] ?? "https://framerusercontent.com/images/EAVr5cCFCBT3gqjfeAu9iB5BY.png?width=1280&height=736"} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["div-142"]}>
                <div className={styles["div-122"]}>
                  <Grids slots={[]} />
                </div>
              </div>
            </section>
            <section className={styles["service-section"]}>
              <div className={styles["container-6"]}>
                <div className={styles["header"]}>
                  <div className={styles["heading-2"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-143"]}>
                        <h2 className={styles["h2-5"]}>
                          <span className={styles["span-24"] + " " + styles["rv-5"]} data-reveal>{slots[1] ?? "Everything"}</span>
                          {" "}
                          <span className={styles["span-25"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "78ms" }}>{slots[2] ?? "you"}</span>
                          {" "}
                          <span className={styles["span-26"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "158ms" }}>{slots[3] ?? "need"}</span>
                          {" "}
                          <span className={styles["span-27"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "236ms" }}>{slots[4] ?? "to"}</span>
                          {" "}
                          <span className={styles["span-28"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "289ms" }}>{slots[5] ?? "go"}</span>
                          {" "}
                          <span className={styles["span-29"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "367ms" }}>{slots[6] ?? "digital"}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <section className={styles["service-section-2"]}>
                  <div className={styles["container-7"]}>
                    <div className={styles["grid"]}>
                      <div className={styles["grid-2"]}>
                        <div className={styles["div-144"]}>
                          <div className={styles["div-145"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "576ms" }}>
                            <ServiceCard slots={["AI Workflow Automation.","SaaS Products","Enterprise Platforms","Web and mobile Applications","https://framerusercontent.com/images/cgrW7f9W33xv3ZDvvKXaqAaaIL0.png?lossless=1&width=750&height=780"]} />
                          </div>
                        </div>
                        <div className={styles["row"]}>
                          <div className={styles["div-122"]}>
                            <div className={styles["div-146"] + " " + styles["rv-6"]} data-reveal>
                              <ServiceCard2 slots={["Built secure. From the start.","We build security into the architecture, experience and technology from the beginning.","https://framerusercontent.com/images/JoLUJzWcifYswzE6msfHXW4QOg.png?lossless=1&width=648&height=288"]} />
                            </div>
                          </div>
                          <div className={styles["div-122"]}>
                            <div className={styles["div-146"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "106ms" }}>
                              <ServiceCard2 slots={["Product & Experience Design","We turn complex workflows into simple, intuitive experiences.","https://framerusercontent.com/images/ZorDrCsHnegaSiRVKyn1U0zE.png?lossless=1&width=580&height=367"]} />
                            </div>
                          </div>
                          <div className={styles["div-122"]}>
                            <div className={styles["div-146"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "628ms" }}>
                              <div className={styles["primary-2"]}>
                                <div className={styles["text-5"]}>
                                  <div className={styles["ai-chatbots-conversational-agents-24-7-customer-support-lead-qualification-booking-systems-and-ai-sales-reps-3"]}>
                                    <div className={styles["p-45"]}>
                                      <div className={styles["strong"]}>
                                        {"AI & Intelligent Solutions"}
                                        <br className={styles["strong"]} />
                                      </div>
                                      {"Bring intelligence into products, workflows and everyday business. "}
                                      <strong className={styles["strong"]}>{slots[7] ?? "AI Applications"}</strong>
                                      <br className={styles["br"]} />
                                      <strong className={styles["strong"]}>{slots[8] ?? "AI Assistants"}</strong>
                                      <br className={styles["br"]} />
                                      <strong className={styles["strong"]}>{slots[9] ?? "Intelligent Automation"}</strong>
                                      <br className={styles["br"]} />
                                      <strong className={styles["strong"]}>{slots[10] ?? "AI-Powered Experiences"}</strong>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["image-3"]}>
                                  <div className={styles["div-147"]}>
                                    <img className={styles["img-8"]} src={slots[11] ?? "https://framerusercontent.com/images/6TuyOzSCZDNOdRtZ8FK3OJeJ8.png?lossless=1&width=600&height=257"} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["div-122"]}>
                            <div className={styles["div-146"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "734ms" }}>
                              <ServiceCard2 slots={["Data & Intelligence","Turn information into something your business can actually use.","https://framerusercontent.com/images/8U1vJYm3i4TejPV6zUq2qL12tAU.png?lossless=1&width=600&height=327"]} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["grid-3"]}>
                        <div className={styles["div-148"]}>
                          <div className={styles["div-122"]}>
                            <div className={styles["cta-modal"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "1362ms" }}>
                              <div className={styles["div-149"]}>
                                <img className={styles["img-9"]} src={slots[12] ?? "https://framerusercontent.com/images/0CN0fHxNfhhT598COuLVuLJinLY.jpg?width=736&height=1308"} alt="" />
                              </div>
                              <div className={styles["top"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "944ms" }}>
                                <div className={styles["icon-wrap-3"]}>
                                  <div className={styles["icon-4"]}>
                                    <div className={styles["phone-calling"]} />
                                  </div>
                                </div>
                                <div className={styles["content"]}>
                                  <div className={styles["not-sure-what-to-automate-first"]}>
                                    <p className={styles["p-46"]}>{slots[13] ?? "Not sure what to automate first?"}</p>
                                  </div>
                                  <div className={styles["book-a-free-30-minute-ai-strategy-session-we-ll-analyze-your-current-workflows-and-identify-the-highest-roi-automation-opportunities-for-your-business"]}>
                                    <div className={styles["p-47"]}>
                                      {"Book a free 30-minute session."}
                                      <div className={styles["br"]}>
                                        <br className={styles["br"]} />
                                      </div>
                                      {"We’ll analyze your current workflows and identify the highest-ROI automation opportunities for your business."}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-150"]}>
                                <Button slots={["Schedule a Session","Schedule a Session"]} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["service-card"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "1390ms" }}>
                          <div className={styles["div-151"]}>
                            <div className={styles["p-48"]}>
                              <strong className={styles["strong-2"]}>{slots[14] ?? "Your Data. Protected. Always."}</strong>
                            </div>
                          </div>
                          <div className={styles["div-152"]}>
                            <div className={styles["service-data"]}>
                              <div className={styles["frame-2087331264"]}>
                                <div className={styles["image-4"]}>
                                  <div className={styles["div-153"]}>
                                    <img className={styles["img-10"]} src={slots[15] ?? "https://framerusercontent.com/images/pdkQyHShmPj4gyqAlGNn3KZM8I.svg?width=92&height=92"} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className={styles["end-to-end-encryption"]}>
                                <p className={styles["p-49"]}>{slots[16] ?? "End-to-End Encryption"}</p>
                              </div>
                            </div>
                            <div className={styles["service-data"]}>
                              <div className={styles["frame-2087331264"]}>
                                <div className={styles["image-4"]}>
                                  <div className={styles["div-153"]}>
                                    <img className={styles["img-10"]} src={slots[17] ?? "https://framerusercontent.com/images/VH2mUfieaphM22oJXRJxJTgyKg.svg?width=92&height=92"} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className={styles["end-to-end-encryption"]}>
                                <p className={styles["p-49"]}>{slots[18] ?? "Secure API Integrations"}</p>
                              </div>
                            </div>
                            <div className={styles["service-data"]}>
                              <div className={styles["frame-2087331264"]}>
                                <div className={styles["image-4"]}>
                                  <div className={styles["div-153"]}>
                                    <img className={styles["img-10"]} src={slots[19] ?? "https://framerusercontent.com/images/tIPyva99zCWWptuB7CjxPXL0p8.svg?width=92&height=92"} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className={styles["end-to-end-encryption-2"]}>
                                <p className={styles["p-50"]}>{slots[20] ?? "Role-Based Access Control"}</p>
                              </div>
                            </div>
                            <div className={styles["service-data"]}>
                              <div className={styles["frame-2087331264"]}>
                                <div className={styles["image-4"]}>
                                  <div className={styles["div-153"]}>
                                    <img className={styles["img-10"]} src={slots[21] ?? "https://framerusercontent.com/images/O3EhSvfrzIQC1qazGhfmozt0p4.svg?width=92&height=92"} alt="" />
                                  </div>
                                </div>
                              </div>
                              <div className={styles["end-to-end-encryption"]}>
                                <p className={styles["p-49"]}>{slots[22] ?? "Data Minimization"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
            <div className={styles["inner-container-2"]}>
              <div className={styles["spacer-2"]} />
            </div>
            <div className={styles["section-services"]}>
              <div className={styles["heading-3"]}>
                <div className={styles["div-122"]}>
                  <div className={styles["div-154"]}>
                    <h2 className={styles["h2-6"]}>
                      <span className={styles["span-30"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "370ms" }}>{slots[23] ?? "Our"}</span>
                      {" "}
                      <span className={styles["span-31"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "370ms" }}>{slots[24] ?? "services"}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles["bg-wrapper"]}>
                <div className={styles["div-155"] + " " + styles["rv-7"]} data-reveal>
                  <div className={styles["div-122"]}>
                    <div className={styles["div-156"]} />
                  </div>
                </div>
              </div>
              <div className={styles["div-157"]}>
                <a className={styles["service-1"]} href="./projects/1">
                  <div className={styles["div-158"]}>
                    <div className={styles["div-159"] + " " + styles["rv-8"]} data-reveal style={{ transitionDelay: "370ms" }}>
                      <Services slots={["01","https://framerusercontent.com/images/0CN0fHxNfhhT598COuLVuLJinLY.jpg?width=736&height=1308","https://framerusercontent.com/images/zNlXTrJ4dPbnu1ZOPogmLeTSg3Y.jpg?scale-down-to=512&width=736&height=736","https://framerusercontent.com/images/uWgKdahd9dclv7Y5tPg5gsXKBb4.png?scale-down-to=512&width=1605&height=1191","SaaS & Digital Platforms","Building the systems behind modern businesses. We design and develop scalable SaaS products, web platforms and digital ecosystems — from the first idea to a product people actually use."]} />
                    </div>
                  </div>
                  <div className={styles["div-158"]}>
                    <div className={styles["div-160"]}>
                      <Divider slots={[]} />
                    </div>
                  </div>
                </a>
                <a className={styles["service-1"]} href="./projects/2">
                  <div className={styles["div-158"]}>
                    <div className={styles["div-159"] + " " + styles["rv-8"]} data-reveal>
                      <Services slots={["02","https://framerusercontent.com/images/BQbZ7M8SnMWGCEoYCh4TGvWZNw.png?width=1448&height=1086","https://framerusercontent.com/images/V3YvoocfQlDUs00NYHPZ4IXl1w.png?scale-down-to=512&width=1536&height=1024","https://framerusercontent.com/images/J0KuNTINeazcDIAeJcl0ZHyxZgA.png?scale-down-to=512&width=2400&height=1920","Data Security & Digital Infrastructure","Security built into the foundation. We create secure digital environments where data, users and business operations can move with confidence — with security considered from architecture to experience."]} />
                    </div>
                  </div>
                  <div className={styles["div-158"]}>
                    <div className={styles["div-160"]}>
                      <Divider slots={[]} />
                    </div>
                  </div>
                </a>
                <a className={styles["service-1"]} href="./projects/3">
                  <div className={styles["div-158"]}>
                    <div className={styles["div-159"] + " " + styles["rv-8"]} data-reveal>
                      <Services slots={["03","https://framerusercontent.com/images/o7vycuDO736P7qkTC6xz00SOY5k.png?scale-down-to=512&width=9000&height=6750","https://framerusercontent.com/images/eOkj3O3v6qRF2SnzvOGQmr5UZV0.jpg?scale-down-to=512&width=1000&height=715","https://framerusercontent.com/images/VmkhuYuDqZdBBYrok2TFWclhuw.png?scale-down-to=512&width=12000&height=9000","CRM & Enterprise Systems","Making complex business systems feel simple. We build CRM and enterprise platforms that bring people, data and workflows together — making everyday operations smarter, clearer and more efficient."]} />
                    </div>
                  </div>
                  <div className={styles["div-158"]}>
                    <div className={styles["div-160"]}>
                      <Divider slots={[]} />
                    </div>
                  </div>
                </a>
                <a className={styles["service-1"]} href="./projects/4">
                  <div className={styles["div-158"]}>
                    <div className={styles["div-159"] + " " + styles["rv-8"]} data-reveal>
                      <Services slots={["04","https://framerusercontent.com/images/J4UMK0WsFcWZfZhWtWjArb2Zl10.png?scale-down-to=512&width=2804&height=1900","https://framerusercontent.com/images/mXLlEYUH8zlNYdj6tDOw9VFAEf4.png?scale-down-to=2048&width=6113&height=3785","https://framerusercontent.com/images/I6gN2A6lm70KM4ghF3h75Pllf6g.png?scale-down-to=2048&width=5604&height=4203","UI/UX & Product Design","Making technology easier to understand. From UX strategy and information architecture to interfaces, design systems and interaction — we turn complicated products into intuitive experiences."]} />
                    </div>
                  </div>
                  <div className={styles["div-158"]}>
                    <div className={styles["div-160"]}>
                      <Divider slots={[]} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["section-who-we-are"]}>
              <div className={styles["container-8"]}>
                <div className={styles["header-2"]}>
                  <div className={styles["heading-4"]}>
                    <div className={styles["div-161"]}>
                      <h2 className={styles["h2-7"]}>
                        <span className={styles["span-32"] + " " + styles["rv-5"]} data-reveal>{slots[25] ?? "How"}</span>
                        {" "}
                        <span className={styles["span-33"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "176ms" }}>{slots[26] ?? "We"}</span>
                        {" "}
                        <span className={styles["span-34"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "176ms" }}>{slots[27] ?? "Work"}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={styles["main"] + " " + styles["rv-6"]} data-reveal>
                  <div className={styles["div-162"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-163"]}>
                        <ProcessItem slots={["01","Discovery & Audit","We analyze your business workflows, bottlenecks, and revenue opportunities."]} />
                      </div>
                    </div>
                    <div className={styles["process-trigger"]} />
                  </div>
                  <div className={styles["div-162"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-163"]}>
                        <ProcessItem2 slots={["Automation Blueprint","We design a detailed automation architecture aligned with KPIs.","02"]} />
                      </div>
                    </div>
                    <div className={styles["process-trigger-2"]} />
                  </div>
                  <div className={styles["div-162"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-163"]}>
                        <ProcessItem slots={["03","Build & Integration","Our engineers implement AI systems and integrate with your existing tools."]} />
                      </div>
                    </div>
                    <div className={styles["process-trigger-2"]} />
                  </div>
                  <div className={styles["div-162"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-163"]}>
                        <ProcessItem2 slots={["Testing & Optimization","Performance testing, data validation, iterative refinement and optimization.","04"]} />
                      </div>
                    </div>
                    <div className={styles["process-trigger-2"]} />
                  </div>
                  <div className={styles["div-162"]}>
                    <div className={styles["div-122"]}>
                      <div className={styles["div-163"]}>
                        <ProcessItem slots={["05","Deployment & Scaling","Launch, monitor, and continuously optimize systems to support scalable growth."]} />
                      </div>
                    </div>
                    <div className={styles["process-trigger-2"]} />
                  </div>
                  <div className={styles["process-line-ray"]}>
                    <div className={styles["process-line-wrap"]}>
                      <div className={styles["process-line"]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["section-who-we-are-2"]}>
              <div className={styles["div-164"]}>
                <h2 className={styles["h2-8"]}>
                  <div className={styles["span-35"] + " " + styles["rv-5"]} data-reveal />
                  {" "}
                  <span className={styles["span-36"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "226ms" }}>{slots[28] ?? "Know"}</span>
                  {" "}
                  <span className={styles["span-37"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "309ms" }}>{slots[29] ?? "more"}</span>
                  {" "}
                  <span className={styles["span-38"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "360ms" }}>{slots[30] ?? "about"}</span>
                  {" "}
                  <span className={styles["span-39"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "442ms" }}>{slots[31] ?? "what"}</span>
                  {" "}
                  <span className={styles["span-40"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "519ms" }}>{slots[32] ?? "we"}</span>
                  {" "}
                  <span className={styles["span-41"] + " " + styles["rv-5"]} data-reveal style={{ transitionDelay: "596ms" }}>{slots[33] ?? "do"}</span>
                </h2>
              </div>
              <a className={styles["cms-project-neoyokoto"]} href="./work">
                <div className={styles["div-165"]}>
                  <div className={styles["div-166"]}>
                    <div className={styles["div-167"]}>
                      <div className={styles["div-168"]}>
                        <div className={styles["div-169"]}>
                          <img className={styles["img-11"]} src={slots[34] ?? "https://framerusercontent.com/images/mXLlEYUH8zlNYdj6tDOw9VFAEf4.png?scale-down-to=2048&width=6113&height=3785"} alt="" />
                          <div className={styles["div-170"]} />
                          <div className={styles["div-171"]}>
                            <div className={styles["div-172"]} />
                            <div className={styles["div-173"]}>{slots[35] ?? "Design studio"}</div>
                          </div>
                        </div>
                        <div className={styles["div-174"]}>
                          <img className={styles["img-11"]} src={slots[36] ?? "https://framerusercontent.com/images/mXLlEYUH8zlNYdj6tDOw9VFAEf4.png?scale-down-to=2048&width=6113&height=3785"} alt="" />
                          <div className={styles["div-175"]} />
                          <div className={styles["div-176"]} />
                        </div>
                      </div>
                      <div className={styles["div-177"]}>
                        <div className={styles["div-178"]}>
                          <img className={styles["img-12"]} src={slots[37] ?? "https://framerusercontent.com/images/sfIJbwkNWX7jZerIL3HfqidIo.jpg?width=1080&height=1350"} alt="" />
                          <div className={styles["div-179"]} />
                          <div className={styles["div-180"]}>
                            <div className={styles["div-181"]}>{slots[38] ?? "Cyber Pulse"}</div>
                            <div className={styles["div-182"]}>{slots[39] ?? "AI & Intelligence lab"}</div>
                          </div>
                        </div>
                        <div className={styles["div-183"]}>
                          <img className={styles["img-12"]} src={slots[40] ?? "https://framerusercontent.com/images/sfIJbwkNWX7jZerIL3HfqidIo.jpg?width=1080&height=1350"} alt="" />
                          <div className={styles["div-184"]} />
                          <div className={styles["div-185"]} />
                        </div>
                      </div>
                      <div className={styles["div-186"]}>
                        <div className={styles["div-178"]}>
                          <img className={styles["img-12"]} src={slots[41] ?? "https://framerusercontent.com/images/BQbZ7M8SnMWGCEoYCh4TGvWZNw.png?width=1448&height=1086"} alt="" />
                          <div className={styles["div-179"]} />
                          <div className={styles["div-180"]}>
                            <div className={styles["div-181"]}>{slots[42] ?? "Cyber security"}</div>
                            <div className={styles["div-182"]}>{slots[43] ?? "Data security"}</div>
                          </div>
                        </div>
                        <div className={styles["div-187"]}>
                          <img className={styles["img-12"]} src={slots[44] ?? "https://framerusercontent.com/images/BQbZ7M8SnMWGCEoYCh4TGvWZNw.png?width=1448&height=1086"} alt="" />
                          <div className={styles["div-184"]} />
                          <div className={styles["div-185"]} />
                        </div>
                      </div>
                      <div className={styles["div-188"]}>
                        <div className={styles["div-178"]}>
                          <img className={styles["img-12"]} src={slots[45] ?? "https://framerusercontent.com/images/M92NHX6LdEqNI1u1pqUOjib8Wc.png?scale-down-to=2048&width=6428&height=6428"} alt="" />
                          <div className={styles["div-179"]} />
                          <div className={styles["div-180"]}>
                            <div className={styles["div-181"]}>{slots[46] ?? "Cosmic Drift"}</div>
                            <div className={styles["div-182"]}>{slots[47] ?? "Cloud infrastructure"}</div>
                          </div>
                        </div>
                        <div className={styles["div-187"]}>
                          <img className={styles["img-12"]} src={slots[48] ?? "https://framerusercontent.com/images/M92NHX6LdEqNI1u1pqUOjib8Wc.png?scale-down-to=2048&width=6428&height=6428"} alt="" />
                          <div className={styles["div-184"]} />
                          <div className={styles["div-185"]} />
                        </div>
                      </div>
                      <div className={styles["div-189"]}>
                        <div className={styles["div-178"]}>
                          <img className={styles["img-12"]} src={slots[49] ?? "https://framerusercontent.com/images/I6gN2A6lm70KM4ghF3h75Pllf6g.png?scale-down-to=2048&width=5604&height=4203"} alt="" />
                          <div className={styles["div-179"]} />
                          <div className={styles["div-180"]}>
                            <div className={styles["div-181"]}>{slots[50] ?? "Nature's Voice"}</div>
                            <div className={styles["div-182"]}>{slots[51] ?? "Forest Echoes"}</div>
                          </div>
                        </div>
                        <div className={styles["div-183"]}>
                          <img className={styles["img-12"]} src={slots[52] ?? "https://framerusercontent.com/images/I6gN2A6lm70KM4ghF3h75Pllf6g.png?scale-down-to=2048&width=5604&height=4203"} alt="" />
                          <div className={styles["div-184"]} />
                          <div className={styles["div-185"]} />
                        </div>
                      </div>
                    </div>
                    <button className={styles["button"]}>
                      <SvgGraphic className={styles["svg-6"]} html={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#ffffff\" data-f2c-idx=\"570\"><path d=\"M8 5v14l11-7z\" data-f2c-idx=\"571\"></path></svg>"} />
                    </button>
                    <button className={styles["button-2"]}>
                      <SvgGraphic className={styles["svg-7"]} html={"<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-f2c-idx=\"573\"><polyline points=\"15 18 9 12 15 6\" data-f2c-idx=\"574\"></polyline></svg>"} />
                    </button>
                    <button className={styles["button-3"]}>
                      <SvgGraphic className={styles["svg-7"]} html={"<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" data-f2c-idx=\"576\"><polyline points=\"9 18 15 12 9 6\" data-f2c-idx=\"577\"></polyline></svg>"} />
                    </button>
                    <div className={styles["div-190"]}>
                      <button className={styles["button-4"]} />
                      <button className={styles["button-5"]} />
                      <button className={styles["button-5"]} />
                      <button className={styles["button-5"]} />
                      <button className={styles["button-5"]} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles["div-191"]}>
              <NextSmoothScroll slots={[]} />
            </div>
          </div>
          <div className={styles["div-21"]} />
          <div className={styles["div-192"]} />
          <div className={styles["div-193"]}>
            <div className={styles["div-122"]}>
              <Footer slots={["Stay Connected","Start a conversation","hello@repuslo.com","India, New delhi","+91 8076 787 761","Australia, Melbourne","+61 447828835","Let us know about your project","Name","Email","Message","Submit","H","o","m","e","S","e","r","v","i","c","e","s","A","b","o","u","t","u","s","C","o","n","t","a","c","t","Terms of service","Privacy Policy","2026 Repulso. All rights reserved."]} />
            </div>
          </div>
        </div>
        <Main2 slots={[]} />
      </div>
      <div className={styles["div-194"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-2"]}>
            <div className={styles["div-195"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-51"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-196"]}>
        <SvgGraphic className={styles["svg-8"]} html={"<svg viewBox=\"0 0 16 16\" id=\"svg10580641683\" data-f2c-idx=\"789\"><g data-f2c-idx=\"790\"><path d=\"M 0 16 L 0 0 L 16 0 L 16 16 Z\" fill=\"transparent\" data-f2c-idx=\"791\"></path><path d=\"M 3.333 8 L 6.667 11.333 L 13.333 4.667\" fill=\"transparent\" stroke=\"var(--token-8d6ef72b-962d-48df-af78-a514b20c6a38, rgb(82, 82, 82))\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"\" data-f2c-idx=\"792\"></path></g></svg>"} />
        <SvgGraphic className={styles["svg-8"]} html={"<svg viewBox=\"0 0 16 16\" id=\"svg10836317667\" data-f2c-idx=\"793\"><path d=\"M 3.333 8 L 12.666 8 M 10 10.667 L 12.667 8 M 10 5.333 L 12.667 8\" fill=\"transparent\" stroke=\"var(--token-efccd315-1615-4da9-a026-5a812a6b739b, rgb(255, 255, 255))\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"\" data-f2c-idx=\"794\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 6 6\" overflow=\"visible\" id=\"svg1220486354_379\" data-f2c-idx=\"795\"><path d=\"M 0 0 L 6 0 L 6 6 M 0 6 L 6 0\" fill=\"transparent\" stroke=\"var(--token-9c01f4dd-dfec-4ade-8df4-9bb081a3e628, rgb(115, 115, 115)) /* {&quot;name&quot;:&quot;500&quot;} */\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-dasharray=\"\" data-f2c-idx=\"796\"></path></svg>"} />
        <SvgGraphic className={styles["svg-10"]} html={"<svg id=\"1175957644\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"797\"><path d=\"M 0 0 L 14 0\" fill=\"transparent\" height=\"1px\" id=\"h3fQSrHEV\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(5 12)\" width=\"14px\" data-f2c-idx=\"798\"></path><path d=\"M 0 0 L 7 7 L 0 14\" fill=\"transparent\" height=\"14px\" id=\"DAe82Eor1\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(12 5)\" width=\"7px\" data-f2c-idx=\"799\"></path></svg>"} />
        <SvgGraphic className={styles["svg-10"]} html={"<svg id=\"3297562825\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"800\"><path d=\"M 0 5 L 5 0 L 10 5\" fill=\"transparent\" height=\"5px\" id=\"l_AYWDkWi\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(7 15)\" width=\"10px\" data-f2c-idx=\"801\"></path><path d=\"M 0 0 L 5 5 L 10 0\" fill=\"transparent\" height=\"5px\" id=\"w0goKhjfN\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(7 4)\" width=\"10px\" data-f2c-idx=\"802\"></path></svg>"} />
      </div>
      <div className={styles["div-197"]}>
        <span className={styles["span-42"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-6"]}>
          <SvgGraphic className={styles["svg-11"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"806\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"807\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
