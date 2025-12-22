"use client";

import { useState } from "react";

export default function WaitlistModal({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const [step, setStep] = useState<"form" | "otp">("form");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    // STEP 1 — send OTP
    const sendOtp = async () => {
        if (!name || !email) {
            alert("Fill both fields");
            return;
        }

        setLoading(true);

        const res = await fetch("/api/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });

        setLoading(false);

        if (!res.ok) {
            alert("Failed to send OTP");
            return;
        }

        const data = await res.json();
        setToken(data.token);
        setStep("otp");
    };

    // STEP 2 — verify OTP
    const verifyOtp = async () => {
        if (!otp) {
            alert("Enter OTP");
            return;
        }

        setLoading(true);

        const res = await fetch("/api/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name, otp, token }),
        });

        setLoading(false);

        if (!res.ok) {
            alert("Invalid OTP");
            return;
        }

        alert("You’re on the waitlist 🎉");
        onClose();
        reset();
    };

    const reset = () => {
        setStep("form");
        setName("");
        setEmail("");
        setOtp("");
        setToken("");
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={onClose} className="absolute inset-0 bg-black/50" />

            <div className="relative bg-white rounded-xl p-6 w-full max-w-sm text-left">
                <h2 className="text-xl font-bold mb-4">
                    {step === "form" ? "Join the Waitlist" : "Enter OTP"}
                </h2>

                {step === "form" && (
                    <>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full border rounded px-3 py-2 mb-3"
                        />

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            type="email"
                            className="w-full border rounded px-3 py-2 mb-4"
                        />

                        <button
                            onClick={sendOtp}
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded font-semibold disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send OTP"}
                        </button>
                    </>
                )}

                {step === "otp" && (
                    <>
                        <input
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="6-digit OTP"
                            className="w-full border rounded px-3 py-2 mb-4 tracking-widest text-center"
                        />

                        <button
                            onClick={verifyOtp}
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded font-semibold disabled:opacity-50"
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
