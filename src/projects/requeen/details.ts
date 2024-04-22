import type { ProjectDetailedInfo } from "@/types/project";
import { Basic } from "./basic";
import { Introduction } from "./intro";
import { ScreenShot } from "./screenshots";
import { VersionHistory } from "./versions";

export const Details: ProjectDetailedInfo = {
  ...Basic,
  introduction: Introduction,
  platforms: ["Windows", "macOS", "Linux"],
  techStacks: ["Tauri", "Vite", "React", "TypeScript"],
  languages: ["English"],
  screenshots: ScreenShot,
  downloadLink: null,
  versionHistory: VersionHistory,
};
