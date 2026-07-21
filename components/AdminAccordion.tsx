"use client";

import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


interface Section {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
}


interface Props {
  sections: Section[];
}


export default function AdminAccordion({
  sections,
}: Props) {

  return (
    <Accordion
      defaultValue={["stats"]}
      className="space-y-5"
    >

      {sections.map((section) => (

        <AccordionItem
          key={section.id}
          value={section.id}
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            px-5
            shadow-sm
          "
        >

          <AccordionTrigger
            className="
              py-5
              hover:no-underline
            "
          >

            <div className="flex items-center gap-4">

              <span className="text-2xl">
                {section.icon}
              </span>

              <h2 className="text-lg font-bold text-slate-900">
                {section.title}
              </h2>

            </div>

          </AccordionTrigger>


          <AccordionContent>

            <div className="pb-6">

              {section.children}

            </div>

          </AccordionContent>


        </AccordionItem>

      ))}

    </Accordion>
  );
}