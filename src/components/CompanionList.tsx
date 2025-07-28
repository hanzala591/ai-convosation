import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CompanionCardProps } from "./CompanionCard";

interface CompanionListProps {
  title: string;
  companions: Companion[];
}

export default function CompanionList({
  title,
  companions,
}: CompanionListProps) {
  return (
    <div className="rounded-3xl p-5 border border-secondary shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <Table className="pt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Lessons</TableHead>
            <TableHead className="w-1/4 text-center">Subject</TableHead>
            <TableHead className="w-1/4 text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map((value, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex">
                  <div className="flex flex-col">
                    <h5 className="font-bold">{value.name}</h5>
                    <h6 className="font-light">{value.topic}</h6>
                  </div>
                </div>
              </TableCell>
              <TableCell className="mx-auto flex justify-center">
                <h2 className="bg-secondary text-secondary-foreground w-fit py-2 px-4 rounded-4xl">
                  {" "}
                  {value.subject}
                </h2>
              </TableCell>
              <TableCell className="text-right">
                {value.duration} mins
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
