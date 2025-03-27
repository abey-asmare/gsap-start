import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

function App() {
  const boxRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".box", { rotation: 360 });
    },
    { scope: boxRef }
  );

  // const handleClick = contextSafe(() => {
  //   gsap.to(".box", { rotation: "+=360" });
  // });
  return (
    <div className="container">
      <div className="boxContainer flex gap-8 m-8" ref={boxRef}>
        <div className="box w-16 h-16 bg-cyan-500 rounded-xl block"></div>
      </div>
      <div>hello</div>
    </div>
  );
}

export default App;
