import type { ProjectDetailedInfo } from "@/types/project";
import { Basic } from "./basic";
import { Introduction } from "./intro";
import { ScreenShots } from "./screenshots";
import { VersionHistory } from "./versions";
import { Downloads } from "./downloads";

export const Details: ProjectDetailedInfo = {
  ...Basic,
  introduction: Introduction,
  platforms: ["Windows"],
  techStacks: ["Qt", "C++"],
  languages: ["简体中文"],
  screenshots: ScreenShots,
  downloads: Downloads,
  versionHistory: VersionHistory,
};
