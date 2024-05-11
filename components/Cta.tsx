"use client";
import { Button } from "./Button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function Cta() {
  const words = [
    {
      text: "Grab",
    },
    {
      text: "a",
    },
    {
      text: "workout",
    },
    {
      text: "with",
    },
    {
      text: "RunningRoulette",
      className: "text-amber-400",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] text-black ">
      {/* <p className="text-gray-900 text-xs sm:text-base  ">
        Running is simple, lets keep it that way!
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button type="primary" className="px-12 text-xl">
          Generate a Workout
        </Button>
        <Button type="clear" className="px-5 text-lg">
          More
        </Button>
      </div>
    </div>
  );
}
