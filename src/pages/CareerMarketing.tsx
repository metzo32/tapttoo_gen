import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../stores/test.css';

const CareerMarketing = () => {
  const boxes = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(boxes.current) as HTMLElement[];

    elements.forEach((box, i) => {
      if (box) {
        ScrollTrigger.create({
          trigger: box,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          markers: true,
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 0.6 },
            delay: 0,
          },
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="box a" ref={(el) => (boxes.current[0] = el)}>a</div>
      <div className="box b" ref={(el) => (boxes.current[1] = el)}>b</div>
      <div className="box c" ref={(el) => (boxes.current[2] = el)}>c</div>
      <div className="box d" ref={(el) => (boxes.current[3] = el)}>d</div>
    </div>
  );
};

export default CareerMarketing;
