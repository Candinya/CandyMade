import type { ProjectDetailedInfo } from "@/types/project";
import { Basic } from "./basic";
import { Introduction } from "./intro";
import { ScreenShots } from "./screenshots";
import { VersionHistory } from "./versions";
import { Downloads } from "./downloads";

export const Details: ProjectDetailedInfo = {
  ...Basic,
  introduction: Introduction,
  platforms: ["Windows", "macOS", "Linux"],
  techStacks: ["Tauri", "Vite", "React", "TypeScript"],
  languages: ["English"],
  screenshots: ScreenShots,
  downloads: Downloads,
  versionHistory: VersionHistory,
};
