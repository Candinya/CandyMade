import type { ProjectDetailedInfo } from "@/types/project";
import { Basic } from "./basic";
import { Introduction } from "./intro";
import { ScreenShots } from "./screenshots";
import { VersionHistory } from "./versions";

export const Details: ProjectDetailedInfo = {
  ...Basic,
  introduction: Introduction,
  platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
  techStacks: ["Next.js", "React", "TypeScript", "TailwindCSS"],
  languages: ["简体中文"],
  downloadLink: null,
  screenshots: ScreenShots,
  versionHistory: VersionHistory,
};
