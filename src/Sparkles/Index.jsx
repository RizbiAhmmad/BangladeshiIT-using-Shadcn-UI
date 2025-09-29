import React from "react";

import { Sparkles } from "./Sparkles";
import Earth from "../../components/uilayouts/globe";
function Index() {
  return (
    <>
      <div className="h-[620px] lg:h-[700px] py-12 overflow-hidden text-white bg-black md:py-18">
        <article className="relative z-10 grid gap-4 pt-10 text-center">
          <h1 className="text-3xl lg:text-6xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-tight tracking-tighter">
            TRANSFORM YOUR BUSINESS WITH <br /> SMART DIGITAL SOLUTIONS.
          </h1>
          {/* <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
            Get Access
          </span> */}
          <Earth />
        </article>
        <div className="relative -mt-20 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 w-full h-full "
          />
        </div>
      </div>
    </>
  );
}
export default Index;
