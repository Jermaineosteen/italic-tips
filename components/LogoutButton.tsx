"use client";

import { supabase } from "../lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function logout() {
        await supabase.auth.signOut();
        router.push("/admin/login");
    }

    return (
        <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Logout
        </button>
    )
}