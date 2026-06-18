"use client";
// components/ui/ProjectCard.tsx
import { ElementType } from "react";
import { motion } from "framer-motion";
import { Github, Brain, Flower2, CloudSun, MessageSquareText } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/GlassCard";

const projectIcons: Record<string, ElementType> = {
  "vi-cbir": Brain,
  "flower-clustering": Flower2,
  "weather-analytics": CloudSun,
  "text-to-sql": MessageSquareText,
};

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "in-progress": "bg-amber-500/15 text-amber-400 border-amber-500/25",
  planned: "bg-ink-faint/10 text-ink-faint border-ink-faint/20",
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-2xl shadow-glass hover:border-signal-cyan/30 hover:shadow-glow-cyan transition-[border-color,box-shadow] duration-300 overflow-hidden flex flex-col"
    >
      <div className="h-32 sm:h-40 bg-gradient-to-br from-signal/5 via-signal-cyan/5 to-signal-violet/5 flex items-center justify-center border-b border-hairline relative overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-signal-gradient opacity-10 blur-2xl rounded-full" />
          <Icon size={48} className="text-signal-cyan/40" />
        </div>
        {project.featured && (
          <span className="absolute top-2.5 left-3 rounded-full bg-signal-gradient px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white shadow-glow-blue">
            Flagship
          </span>
        )}
        {project.status && (
          <span
            className={`absolute top-2.5 right-3 rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider ${statusStyles[project.status] || statusStyles.planned}`}
          >
            {project.status}
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col p-7 pt-6">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-signal-cyan">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-hairline pt-5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-lg font-semibold text-ink">
                  {m.value}
                </p>
                <p className="text-xs text-ink-faint">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <a
          href={project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-hairline bg-ink-faint/5 px-4 py-3 text-sm font-medium text-ink hover:bg-signal-gradient hover:text-white hover:border-transparent transition-all"
        >
          <Github size={16} />
          View Code
        </a>
      </div>
    </motion.div>
  );
}
