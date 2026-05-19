"use client";

import ExploitationQuiz from "@/components/ExploitationQuiz";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#050505]">
      <ExploitationQuiz onClose={() => router.push("/")} />
    </main>
  );
}
