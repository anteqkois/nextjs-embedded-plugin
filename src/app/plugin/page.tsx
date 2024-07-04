"use client";

import { Plugin } from "@/components/Plugin";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Plugin config={{ welcomeText: "Welcome" }} />
    </main>
  );
}
