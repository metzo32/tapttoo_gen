// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import '../stores/test.css'

// gsap.registerPlugin(ScrollTrigger);

// const CareerMarketing = () => {
//   const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     boxesRef.current.forEach((box, i) => {
//       ScrollTrigger.create({
//         trigger: box,
//         start: 'top top',
//         pin: true,
//         pinSpacing: false,
//         anticipatePin: 1,
//         markers: true,
//         snap: {
//           snapTo: 1, // Snap to each section
//           duration: { min: 0.2, max: 0.6 }, // Snap animation duration
//           delay: 0, // Delay before snap animation starts
//         },
//       });
//     });
//   }, []);

//   return (
//     <div>
//       <div className="box a" ref={(el) => (boxesRef.current[0] = el)}>a</div>
//       <div className="box b" ref={(el) => (boxesRef.current[1] = el)}>b</div>
//       <div className="box c" ref={(el) => (boxesRef.current[2] = el)}>c</div>
//       <div className="box d" ref={(el) => (boxesRef.current[3] = el)}>d</div>
//     </div>
//   );
// };

// export default CareerMarketing;
import React from 'react'

export default function CareerMarketing() {
  return (
    <div>
      
    </div>
  )
}
