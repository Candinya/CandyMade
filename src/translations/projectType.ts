import type { ProjectType } from "@/types/project";

export const TranslationProjectType: {
  [key in ProjectType]: string;
} = {
  Desktop: "桌面端",
  Mobile: "移动端",
  AllPlatform: "全平台",
  Web: "网页端",
  Other: "其他",
};
