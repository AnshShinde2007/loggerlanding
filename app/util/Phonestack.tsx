export default function PhoneStack() {
    return (
        <div className="relative h-[420px] w-[260px]">
            {/* Back phone */}
            <div className="absolute top-6 left-6 w-[240px] h-[480px] rounded-2xl bg-neutral-800 border border-neutral-700 opacity-50" />

            {/* Middle phone */}
            <div className="absolute top-3 left-3 w-[240px] h-[480px] rounded-2xl bg-neutral-900 border border-neutral-700 opacity-80" />

            {/* Front phone */}
            <div className="relative w-[240px] h-[480px] rounded-2xl bg-neutral-950 border border-neutral-700 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" />
        </div>
    );
}
