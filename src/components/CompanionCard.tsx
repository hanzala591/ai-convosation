import { Button } from "@/components/ui/button";
import React from "react";
export interface CompanionCardProps {
  subject: string;
  name: string;
  topic: string;
  duration: number;
  color: string;
}
export default function CompanionCard({
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) {
  return (
    <div
      className={`rounded-3xl p-5 border border-secondary`}
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div className="py-1 px-4 bg-secondary text-secondary-foreground rounded-xl">
          {subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase()}
        </div>
        <div className="py-2 px-2.5 rounded-xl  bg-secondary text-secondary-foreground">
          <img src="/icons/bookmark-filled.svg" alt="Not Show" />
        </div>
      </div>
      <h2 className="text-xl font-bold pt-2">{name}</h2>
      <p className="pt-2 text-base font-medium">Topic: {topic}</p>
      <div className="flex gap-1 pt-1 text-base font-medium">
        <img src="/icons/clock.svg" alt="Not shown" />
        {duration} mins duration
      </div>
      <Button className="w-full mt-3">Launch Lesseon</Button>
    </div>
  );
}
