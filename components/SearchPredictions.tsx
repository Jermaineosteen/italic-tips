"use client"

import { useState } from "react";


export default function SearchPredictions() {
    const [search, setSearch] = useState("");

    return (
        <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search matches..."
            className="border rounded p-3 w-full"
        />
    )
}