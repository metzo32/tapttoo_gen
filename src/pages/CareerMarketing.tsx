// import { useState } from "react";
// import s from "../stores/styling";

// export default function CareerMarketing() {
//   const [divs, setDivs] = useState([{ id: Date.now(), zIndex: 0 }]);

//   const addDiv = () => {
//     setDivs([...divs, { id: Date.now() + divs.length, zIndex: divs.length }]);
//   };

//   return (
//     <s.Test onClick={addDiv}>
//       {divs.map((div) => (
//         <s.Test
//           key={div.id}
//         >{div.id}왜</s.Test>
//       ))}
//     </s.Test>
//   );
// }

import s from "../stores/styling";

export default function CareerMarketing() {
  return (
    <>
      <s.Test className="gradient"/>
      <s.Test className="gradient"/>
      <s.Test className="gradient"/>
      <s.Test className="gradient"/>
      <s.Test className="gradient"/>
      <s.Test className="gradient"/>
    </>
  );
}
