"use client";

import { ReactNode, useState } from "react";

interface Section {
    id: string;
    title: string;
    icon: string;
    children: ReactNode;
}

interface Props {
    sections: Section[];
}

export default function AdminAccordion({sections}: Props) {
    const [openSection, setOpenSection] = useState("stats");

    return (
        <div className="space-y-5">
            {sections.map((section) => {
                const open = openSection === section.id;
                return (
                    <div
                        key={section.id}
                        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                    >
                        <button
                            onClick={() => setOpenSection(open ? "" : section.id)}
                            className="flex w-full items-center justify-between p-5"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{section.icon}</span>
                                <h2 className="text-lg font-bold">{section.title}</h2>
                            </div>

                            <span className={`text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="p-6 pt-0">{section.children}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}