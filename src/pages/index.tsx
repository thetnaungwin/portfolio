import { Inter } from "next/font/google";
import React from "react";
import Home_page from "@/components/home";
import Headers_link from "@/components/header";
import Project_page from "@/components/project";
import Contact_page from "@/components/contact";
import Skills_page from "@/components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Headers_link />
      <Home_page />
      <Project_page />
      <Contact_page />
      <Skills_page />
    </div>
  );
}
