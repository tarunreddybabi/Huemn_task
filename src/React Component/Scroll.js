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
      ease: "none",
      scrollTrigger: {
        trigger: imageWrapperRef.current,
        start: "top top",
        end: () => `+=${imageScroll.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="parentWrapper" style={{ overflow: "hidden" }}>
      <div
        className="imageWrapper"
        ref={imageWrapperRef}
        style={{ height: "100vh" }}
      >
        <div
          className="imageScroll"
          ref={imageScrollRef}
          style={{ display: "flex" }}
        >
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
