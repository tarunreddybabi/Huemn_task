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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I make Chrome my default web browser?",
      answer:
        "You can set Chrome as your default browser on Windows or Mac operating systems as well as your iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click will automatically open in Chrome. Find specific instructions for your device here.",
    },
    {
      question: "How can I customise Chrome?",
      answer:
        "You can test out different colours, themes and settings in real time by opening a new tab in Chrome and clicking the “Customise Chrome” icon in the bottom right corner. A new side panel will open with the available customisation features. Learn more about customising Chrome.",
    },
    {
      question: "What are Chrome's safety settings?",
      answer:
        "Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety Check to instantly audit for compromised passwords, safe browsing status and any available Chrome updates. Learn more about safety and security on Chrome.",
    },
    {
      question: "What is Chrome’s password manager?",
      answer:
        "Chrome uses Google Password Manager, which makes it simple to save, manage and protect your passwords online. It also helps you create strong, unique passwords for every account you use. Learn more about Google Password Manager.",
    },
    {
      question: "How do I add a browser extension to Chrome?",
      answer:
        "It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and click Add to Chrome. Some extensions might need additional permissions. To use the extension, click on its icon to the right of the address bar. Learn more about extensions.",
    },
    {
      question: "How do I update Chrome?",
      answer:
        "Normally updates happen in the background when you close and reopen your computer's browser. If you haven’t closed your browser in a while, you might see a pending update. Learn more about Chrome updates.",
    },
  ];

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
          <div id="updates" className="fast">
            Fast
          </div>
          <div id="yours">Yours</div>
          <div id="safe">Safe</div>
          <div id="fast">Fast</div>
          <div id="google">By Google</div>
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
        <div id="updates" className="perform">
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
            <video
              src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm"
              autoPlay
            />
          </div>
        </div>

        <div id="yours" className="stayOnTop">
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

        <div id="safe" className="greenDiv">
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
        <div id="fast" className="blueDiv">
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

      {/* <div className="container">
        <span className="browser-text">The browser</span>
        <span className="built-container">
          <span className="tools-icon">🛠️</span> 
          <span className="built-text">built</span>
        </span>
        <span className="by-google">by Google</span>
      </div> */}

      <div className="ai-section">
        <div className="text-block-container">
          <div className="left-side">
            <h4 className="header-small">GOOGLE AI</h4>
            <h1 className="header-large">
              Access AI superpowers while you browse.
            </h1>
          </div>
          <div className="right-side">
            <p className="description">
              Google is integrating artificial intelligence to make our products
              more useful. We use AI for features like Search, Google Translate,
              and more, and we're innovating new technologies responsibly.
            </p>
            <a href="#" className="explore-link">
              Explore Google AI →
            </a>
          </div>
        </div>
        <div className="graphic-container">
          <img
            src="googleai.png"
            alt="Google AI Graphic"
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>

      <div className="section-container" style={{ marginTop: "10px" }}>
        {/* Left card: Google Search */}
        <div className="card google-search">
          <h4 className="header-small">GOOGLE SEARCH</h4>
          <h1 className="header-large">
            The search bar you love, built right in.
          </h1>
          <div className="image-placeholder">
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/search-front_desktop.webp"
              alt="Search Bar"
              style={{
                marginLeft: "34px",
                transition: "transform 0.3s ease",
              }}
              className="image-hover"
            />
          </div>
        </div>

        {/* Right card: Google Workspace */}
        <div className="card google-workspace">
          <h4 className="header-small">GOOGLE WORKSPACE</h4>
          <h1 className="header-large">
            Get things done, with or without Wi-Fi.
          </h1>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/workspace-1.webp"
              style={{ display: "block" }}
              alt="First Image"
            />
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/workspace-2.webp"
              alt="Gmail"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                transition: "transform 0.3s ease",
              }}
              className="hover-image"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>
          Frequently asked questions
        </h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="faq-toggle-icon">
                  {activeIndex === index ? "x" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Take your browser with you</h1>
          <p className="banner-subtitle">
            Download Chrome on your mobile device or tablet and sign into your
            account for the same browser experience, everywhere.
          </p>
          <button className="download-button">
            <span className="download-icon">⬇️</span> Download Chrome
          </button>
        </div>
        <div className="banner-qr">
          <img src="/qrcode.png" alt="QR Code" className="qr-image" />
          <p className="qr-text">Scan for the Chrome app</p>
        </div>
      </div>
      <div className="footer-container">
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "20px", color: "black", marginRight: "10px" }}>
            Follow us
          </p>
          <img src="/icons.png" width={"200px"} height={"60px"} />
        </div>
        <hr />
        <div className="footer-links">
          <div className="footer-column">
            <a style={{ fontSize: "20px", color: "black" }}>Chrome Family</a>
            <a href="#">Other Platforms</a>
            <a href="#">Chromebooks</a>
            <a href="#">Chromecast</a>
          </div>
          <div className="footer-column">
            <a style={{ fontSize: "20px", color: "black" }}>Enterprise</a>
            <a href="#">Download Chrome Browser</a>
            <a href="#">Chrome Browser for Enterprise</a>
            <a href="#">Chrome Devices</a>
          </div>
          <div className="footer-column">
            <a style={{ fontSize: "20px", color: "black" }}>Education</a>
            <a href="#">Google Chrome Browser</a>
            <a href="#">Devices</a>
            <a href="#">Web Store</a>
          </div>
          <div className="footer-column">
            <a style={{ fontSize: "20px", color: "black" }}>Dev and Partners</a>
            <a href="#">Chromium</a>
            <a href="#">ChromeOS</a>
            <a href="#">Chrome Web Store</a>
            <a href="#">Chrome Experiments </a>
            <a href="#">Chrome Beta </a>
            <a href="#">Chrome Dev</a>
            <a href="#"> Chrome Canary</a>
          </div>
          <div className="footer-column">
            <a style={{ fontSize: "20px", color: "black" }}>Stay Connected</a>

            <a href="#">Chrome Help</a>
            <a href="#">Google Chrome Blog</a>
            <a href="#">Update Chrome</a>
            <a href="#">Chrome Tips</a>
            <a>Google Chrome Blog</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <a href="#">Privacy and Terms</a>
            <a href="#">About Google</a>
            <a href="#">Google Products</a>
          </div>
          <div className="footer-info">
            <a href="#">Help</a>
            <a href="#">English - India</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;
