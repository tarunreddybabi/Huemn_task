import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './imageSwipe.css';  

gsap.registerPlugin(ScrollTrigger);

const ImageComponent = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray('.panel');

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div id="panel1" className="panel">
        <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp" alt="Image 1" />
      </div>
      <div id="panel2" className="panel">
        <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp" alt="Image 2" />
      </div>
    </div>
  );
};

export default ImageComponent;