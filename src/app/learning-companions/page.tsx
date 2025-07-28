import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { recentSessions, subjects } from "@/constants";
import CompanionCard from "@/components/CompanionCard";
export default function page() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between">
        <h3 className="font-bold text-2xl">Companion Library</h3>
        <div className="flex gap-5">
          <Input placeholder="Search your Companions..."></Input>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Subject</SelectLabel>
                {subjects.map((value, index) => (
                  <SelectItem value={value} key={index}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentSessions.map((value, index) => (
          <CompanionCard
            key={index}
            name={value.name}
            topic={value.topic}
            subject={value.subject}
            duration={value.duration}
            color={value.color}
          />
        ))}
      </div>
    </div>
  );
}
