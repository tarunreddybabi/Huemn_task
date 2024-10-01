import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const imageScrollRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const imageScroll = imageScrollRef.current;

    const getScrollAmount = () => {
      let imageWidth = imageScroll.scrollWidth;
      return -(imageWidth - window.innerWidth);
    };

    const tween = gsap.to(imageScroll, {
      x: getScrollAmount(),
      duration: 3,
      ease: "none",
    });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: imageWrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1 + 300}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    });

    return () => {
      scrollTriggerInstance.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="parentWrapper">
      <div className="imageWrapper" ref={imageWrapperRef}>
        <div className="imageScroll" ref={imageScrollRef}>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp"
              style={{ width: "720px", height: "420px" }}
            />
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp"
              style={{
                width: "220px",
                height: "420px",
                border: "1px solid rgba(128, 128, 128, 0.401)",
                borderRadius: "30px",
              }}
            />
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp"
              style={{ width: "720px", height: "420px" }}
            />
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp"
              style={{
                width: "220px",
                height: "420px",
                border: "1px solid rgba(128, 128, 128, 0.401)",
                borderRadius: "30px",
              }}
            />
          </div>
          <div>
            <img
              src="https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
              style={{ width: "720px", height: "420px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
