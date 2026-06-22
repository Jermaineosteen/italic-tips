"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({email, password})

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        router.push("/admin");
        router.refresh();
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-md border rounded-xl p-6"
            >
                <h1 className="text-3xl font-bold mb-6">
                    Admin Login
                </h1>

                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <button
                    disabled={loading}
                    className="w-full bg-black text-white py-3 rounded"
                    type="submit"
                >
                    {
                        loading
                        ? "Logging in..."
                        : "Login"
                    }
                </button>
            </form>
        </div>
    )
}