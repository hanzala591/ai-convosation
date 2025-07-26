import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";

import Navbar from "@/components/Navbar";
import { recentSessions } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-7 ">
      <h3 className="text-xl font-bold">Dashboard</h3>
      <div className="grid pt-4 gap-4 grid-cols-1 md:grid-cols-3">
        {recentSessions.slice(0, 3).map((value, index) => (
          <CompanionCard
            name={value.name}
            topic={value.topic}
            subject={value.subject}
            duration={value.duration}
            color={value.color}
          />
        ))}
      </div>
      <div className="pt-7 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <CompanionList />
        </div>
        <div className="col-span-1">sfadfds</div>
      </div>
    </div>
  );
}
