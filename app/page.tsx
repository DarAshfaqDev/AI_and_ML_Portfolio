// app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Certifications } from "@/components/sections/Certifications";
import { GithubAnalytics } from "@/components/sections/GithubAnalytics";

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <GithubAnalytics />
    </>
  );
}
