import React, { useEffect, useRef, useState } from "react";
import "./Google.css";
import download from "../Pictures/download.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import right from "../Pictures/chevron.png";
import left from "../Pictures/chevron_left.png";
import ImageComponent from "./imageSwipe";
import TextComponent from "./TextTransform";
import Scroll from "./Scroll";

gsap.registerPlugin(ScrollTrigger);

const Google = () => {
  const secNavRef = useRef(null);

  useEffect(() => {
    const element = secNavRef.current;

    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "top top+=10",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".imgBeach", {
      x: 200,
      duration: 5,
      scrollTrigger: {
        trigger: ".imgBeach",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        toggleActions: "restart none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [idCount, setIdCount] = useState(1);

  const HandleIdInc = () => {
    if (idCount <= 3) {
      setIdCount(idCount + 1);
    }
  };
  const HandleIdDec = () => {
    if (idCount >= 2) {
      setIdCount(idCount - 1);
    }
  };

  return (
    <div>
      <div className="nav">
        <div className="nav1">
          <div>
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="Chrome logo"
              height="35px"
              width="35px"
            />
          </div>
          <div className="chrome">Chrome</div>
        </div>
        <div className="nav2">
          <div className="home">Home</div>
          <div className="browser">The Browser By Google</div>
          <div className="features">
            <div>Features</div>
          </div>
          <div className="support">
            <div>Support</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div>
          <img
            src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
            alt="Chrome logo"
            height="64px"
            width="64px"
          />
        </div>
        <div className="textSec">
          <div style={{ marginLeft: "50px" }}>The browser</div>
          <div>
            built to be{" "}
            <div style={{ display: "inline-block", marginTop: "5px" }}>
              <TextComponent />
            </div>
          </div>
        </div>
        <div>
          <button className="btn">
            <span className="btnTxt">
              <img
                src={download}
                height="24px"
                width="24px"
                alt="Download icon"
              />
              Download Chrome
            </span>
          </button>
          <br />
          <span className="window">For Windows 11/10 64-bit.</span>
        </div>
        <p className="help">
          <input type="checkbox" />
          Help make Google Chrome better by automatically sending usage
          statistics and crash reports to Google.{" "}
          <a href="https://support.google.com/chrome/answer/96817?hl=en">
            Learn more
          </a>
        </p>
        <p className="terms">
          By downloading Chrome, you agree to the{" "}
          <a href="https://policies.google.com/terms">
            Google Terms of Service
          </a>{" "}
          and{" "}
          <a href="https://www.google.com/intl/en_in/chrome/terms/">
            Chrome and ChromeOS Additional Terms of Service
          </a>
        </p>
      </div>

      <div className="page2">
        <div className="secNav" ref={secNavRef}>
          <div className="fast">Fast</div>
          <div>Safe</div>
          <div>Yours</div>
          <div>By Google</div>
          <div className="dow">
            <img
              src={download}
              height="20px"
              width="20px"
              alt="Download icon"
            />
            Download
          </div>
        </div>

        <Scroll />

        <div className="discover">
          Discover the latest <br /> <span className="safeSpan">Updates </span>{" "}
          from Chrome
        </div>

        <div className="inlineBlock">
          <div className="inlineBlue">
            <div className="update">
              <p> UPDATES</p>
            </div>
            <div className="automatic">Automatic Updates</div>
            <div className="there">
              There’s a new Chrome release every four weeks, making it easy to
              have the newest features and a faster, safer web browser.
            </div>
            <div className="learn">Learn about automatic updates</div>

            <div>
              <img
                src={
                  "https://www.google.com/chrome/static/images/engagement-homepage/updates/updates.png"
                }
              />
            </div>
          </div>
          <div className="inlineBeach">
            <div className="update">
              <p>Latest</p>
            </div>
            <div className="automatic">New from Chrome</div>
            <div className="there">
              Chrome regularly updates with tools and features that make it
              faster and easier to use.
            </div>
            <div className="learn">Learn what’s new on Chrome</div>

            <div>
              <img
                className="imgBeach"
                src={
                  "https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
                }
                height={"150px"}
                width={"150px"}
              />
            </div>
          </div>
        </div>

        <div className="make">
          Make it{" "}
          <span className="makeYour">
            <img src="./roller.png" width="50px" />
            Yours
          </span>
          and take <br />
          it with you
        </div>

        <ImageComponent />

        <div style={{ height: "800px" }}></div>

        <div className="section4">
          <div className="sec4Sub1">
            <img
              src={
                "https://www.google.com/chrome/static/images/v2/accordion-timed/autofill.webp"
              }
            />
          </div>
          <div className="sec4Sub2">
            <div className="sec4head">Customise your Chrome</div>

            <div className="sec4head">Browse across devices</div>
            <div className="sec4head">Save time with autofill</div>
            <div className="sec4para">
              Use Chrome to save addresses, passwords <br /> and more to quickly
              autofill your details.
            </div>
          </div>
        </div>

        <div className="sec5">
          <div className="sec5sub1">
            <div className="sec5head">Extend your experience</div>
            <div className="sec5para">
              From shopping and entertainment to productivity, find extensions
              to improve your experience in the Chrome Web Store.
            </div>
            <div className="sec5btn">
              <b>Explore Extensions</b>
            </div>
          </div>
          <div className="sec5sub2">
            <img
              src={
                "https://www.google.com/chrome/static/images/dev-components/extensions-ui.png"
              }
            />
            {/* <div className="upper1"><img width="80" height="60" src="https://img.icons8.com/ios-filled/50/228BE6/bag-front-view.png" alt="bag-front-view"/></div>
            <div className="upper2 "><img width="80" height="60" src="https://img.icons8.com/wired/64/1A1A1A/puzzle.png" alt="bag-front-view"/></div>
            <div className="upper3"><img width="80" height="60" src="https://img.icons8.com/ios-filled/50/FAB005/standing-man.png" alt="bag-front-view"/></div>
            <div className="upper4"><img width="80" height="60" src="https://img.icons8.com/ios-filled/50/12B886/illustrator.png" alt="bag-front-view"/></div>
            <div className="upper5"><img width="80" height="60" src="https://img.icons8.com/ios-filled/50/FA5252/frame-rate.png" alt="bag-front-view"/></div> */}
          </div>
        </div>

        <div className="safeDiv">
          Stay <span className="safeSpan">Safe</span> <br />
          while you browse
        </div>

        <div className="sec6">
          <div className="sec6sub1">
            <div className="box1">
              <div className="sec6para">PASSWORD MANAGER</div>
              <div className="sec6head">
                Use strong passwords on <br /> every site.
              </div>

              <div>
                <img
                  src={
                    "https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2.webp"
                  }
                />
              </div>
            </div>

            <div className="box2">
              <div className="sec6box2para">ENHANCED SAFE BROWSING</div>
              <div className="sec6box2head">
                Browse with the <br />
                confidence that <br /> you're staying safer <br /> online.
              </div>
              <div className="sideimage1">
                <img
                  width="70"
                  height="70"
                  src="https://img.icons8.com/ios/50/000000/add--v1.png"
                  alt="add--v1"
                />
              </div>
            </div>
          </div>

          <div className="sec6sub2">
            <div className="box3">
              <div className="sec6box2para">SAFETY CHECK</div>
              <div className="sec6box2head">
                Check your safety <br />
                level in real time with
                <br /> just one click.
              </div>
              <div className="sideimage2">
                <img
                  src="https://img.icons8.com/ios/50/000000/add--v1.png"
                  width="70px"
                  height="70px"
                />
              </div>
            </div>
            <div className="box4">
              <div className="sec6para">PRIVACY GUIDE</div>
              <div className="sec6head">
                Keep your privacy under <br /> your control with easy-to
                <br />
                -use settings.
              </div>
              <div>
                <img
                  className="hoverimg"
                  src={
                    "https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
                  }
                  height={"200px"}
                  width={"300px"}
                />

                <div className="sideimage">
                  <img
                    width="70"
                    height="70"
                    src="https://img.icons8.com/ios/50/000000/add--v1.png"
                    alt="add--v1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-container"></div>
        <div className="sec2Txt">
          The{" "}
          <div style={{ display: "inline-block" }}>
            <TextComponent />
          </div>{" "}
          way to do <br /> things online
        </div>
      </div>
      <div className="bookMark">
        <div className="perform">
          <div className="prior">
            <h2>
              {" "}
              Prioritise <br /> performance
            </h2>
          </div>
          <div className=" built">
            Chrome is built for performance. Optimise your experience with
            <br /> features like Energy Saver and Memory Saver.
          </div>

          <div id="1" className="image">
            <video autoplay playsinline style={{ width: "80vw" }} controls>
              <source src="../Images/videoframe.png" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="stayOnTop">
          <div className="prior">
            <h2>
              {" "}
              Stay on top <br />
              of tabs
            </h2>
          </div>
          <div id="2" className=" built">
            Chrome has tools to help you manage the tabs you’re not quite
            <br /> ready to close. Group, label, and colour-code your tabs to
            stay <br />
            organised and work faster.
          </div>

          <div className="image">
            <img
              src={
                "https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_tablet.webp"
              }
              alt="Tabs and Groups"
            />
          </div>
        </div>

        <div className="greenDiv">
          <div className="prior">
            <h2>
              {" "}
              Optimised for <br /> your device
            </h2>
          </div>
          <div className=" built">
            Chrome is built to work with your <br /> device across platforms.
            That means <br /> a smooth experience on whatever <br /> you’re
            working with.
          </div>

          <div className="image">
            <img
              id="3"
              src={
                "https://www.google.com/chrome/static/images/homepage/fast/devices_tablet.webp"
              }
              alt="Devices"
            />
          </div>
        </div>
        <div className="blueDiv">
          <div className="prior">
            <h2>
              {" "}
              Automatic <br /> updates
            </h2>
          </div>
          <div className=" built">
            There’s a new Chrome update every four weeks, making it easy to{" "}
            <br /> have the newest features and a faster, safer browser.
          </div>

          <div className="image">
            <img
              id="4"
              src={
                "https://www.google.com/chrome/static/images/homepage/fast/update_tablet.webp"
              }
              alt="Update"
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "10px 0px 0px 250px" }}>
        <button
          style={{ backgroundColor: idCount == 1 ? null : "#1a73e8" }}
          onClick={HandleIdDec}
          className="btnArr"
        >
          <a href={`#${idCount}`}>
            <img src={left} height={"32px"} width={"32px"} alt="Left arrow" />
          </a>
        </button>{" "}
        <button
          style={{ backgroundColor: idCount == 4 ? null : "#1a73e8" }}
          onClick={HandleIdInc}
          className="btnArr"
        >
          <a href={`#${idCount}`}>
            <img src={right} height={"32px"} width={"32px"} alt="Right arrow" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Google;
