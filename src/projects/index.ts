import type { ProjectBasicInfo, ProjectDetailedInfo } from "@/types/project";
import { NyaTraceBasic, NyaTraceDetails } from "@/projects/nyatrace";
import { NekopsBasic, NekopsDetails } from "@/projects/nekops";
import { ReQueenBasic, ReQueenDetails } from "@/projects/requeen";
import { CandyMadeBasic, CandyMadeDetails } from "@/projects/candymade";

// 这个会被主页展示使用
export const AllProjectsBasic: ProjectBasicInfo[] = [
  NyaTraceBasic,
  NekopsBasic,
  ReQueenBasic,
  CandyMadeBasic,
];

// 这个会用来生成各个子页面的详细信息
export const AllProjectsDetails: ProjectDetailedInfo[] = [
  NyaTraceDetails,
  NekopsDetails,
  ReQueenDetails,
  CandyMadeDetails,
];

export const AllProjectsIDMap: {
  [key: string]: ProjectDetailedInfo;
} = {};
AllProjectsDetails.forEach((detail) => {
  AllProjectsIDMap[detail.id] = detail;
});
