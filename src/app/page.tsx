"use client";

import { useState } from "react";
import { AssistantChat } from "@/components/AssistantChat";
import { Benefits, FinalCTA, HowItWorks, ToolsPreview } from "@/components/Sections";
import { CompareTable } from "@/components/CompareTable";
import { FloatingHelpButton } from "@/components/FloatingHelpButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SDDInfoSection } from "@/components/SDDInfoSection";
import { Wizard } from "@/components/Wizard";
import { Recommendation } from "@/lib/types";

export default function Home() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <ToolsPreview />
        <Wizard onRecommendations={setRecommendations} onOpenAssistant={() => setAssistantOpen(true)} />
        <CompareTable recommendations={recommendations} />
        <SDDInfoSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingHelpButton onClick={() => setAssistantOpen(true)} />
      <AssistantChat open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </>
  );
}
