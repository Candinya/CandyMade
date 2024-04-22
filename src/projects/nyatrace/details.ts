import type { ProjectDetailedInfo } from "@/types/project";
import { Basic } from "./basic";
import { Introduction } from "./intro";
import { ScreenShot } from "./screenshots";
import { VersionHistory } from "./versions";

export const Details: ProjectDetailedInfo = {
  ...Basic,
  introduction: Introduction,
  platforms: ["Windows"],
  techStacks: ["Qt", "C++"],
  languages: ["简体中文"],
  screenshots: ScreenShot,
  downloadLink: "https://github.com/Candinya/NyaTrace/releases/latest",
  versionHistory: VersionHistory,
};
