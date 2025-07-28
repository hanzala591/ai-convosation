import React from "react";
import { Button } from "./ui/button";

export default function cta() {
  return (
    <div className="p-5 text-center shadow rounded-2xl bg-secondary text-secondary-foreground">
      <div className="flex justify-center">
        <div className="bg-[#FCCC41] text-sm lg:text-base py-1 px-4 font-semibold text-center rounded-lg text-black shadow">
          Start learning your way.
        </div>
      </div>
      <h1 className="lg:text-2xl text-xl font-semibold py-2">
        Build a Personalize Learning Companion
      </h1>
      <p className="text-sm md:text-base font-light">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>

      <img
        src="/images/cta.svg"
        className="lg:h-52 md:h-40 h-36 mx-auto"
        alt=""
      />

      <Button className="w-full text-base">+ Build New Companion</Button>
    </div>
  );
}
