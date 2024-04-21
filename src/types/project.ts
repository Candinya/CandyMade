export type ProjectType = "Application" | "Web" | "Platform" | "Other";
export type ProjectState = "Developing" | "Published" | "Archived";

export type ProjectBasicInfo = {
  id: string;
  name: string;
  slogan: string;
  logo: string;
  type: ProjectType;
  isOpenSource: boolean;
  sourceRepo: string | null;
  startFrom: Date;
  state: ProjectState;
};

export type VersionHistory = {
  version: string;
  releaseDate: Date;
  releaseNote: string;
};

export type ProjectDetailedInfo = ProjectBasicInfo & {
  introduction: string;
  techStacks: string[];
  languages: string[];
  screenshots: string[];
  downloadLink: string | null;
  versionHistory: VersionHistory[];
};
