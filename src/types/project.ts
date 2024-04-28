export type ProjectType =
  | "Desktop"
  | "Mobile"
  | "AllPlatform"
  | "Web"
  | "Other";
export type ProjectPlatform = "Windows" | "macOS" | "Linux" | "Android" | "iOS";

export type ProjectBasicInfo = {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  sourceRepo: string | null;
  license: string | null;
  startFrom: Date;
  type: ProjectType;
  isPublished: boolean;
};

export type ProjectScreenShot = {
  imageUrl: string;
  title: string;
};

export type ProjectVersionHistory = {
  version: string;
  releaseDate: Date;
  releaseNote: string;
};

export type ProjectDownload = {
  text?: string;
  url: string;
};

export type ProjectDetailedInfo = ProjectBasicInfo & {
  introduction: string;
  platforms: ProjectPlatform[];
  techStacks: string[];
  languages: string[];
  screenshots: ProjectScreenShot[];
  downloads: ProjectDownload[];
  versionHistory: ProjectVersionHistory[];
};
