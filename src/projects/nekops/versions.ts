import type { ProjectVersionHistory } from "@/types/project";

export const VersionHistory: ProjectVersionHistory[] = [
  {
    version: "0.1.1",
    releaseDate: new Date("2024-04-21"),
    releaseNote: "优化窗口控制逻辑",
  },
  {
    version: "0.1.0",
    releaseDate: new Date("2024-04-21"),
    releaseNote: "更新底层 Tauri 版本，调整项目域名，自动定位到搜索框",
  },
  {
    version: "0.0.2",
    releaseDate: new Date("2024-01-30"),
    releaseNote: "添加跳板机连接支持，调整 SSH 页面的右键菜单逻辑",
  },
  {
    version: "0.0.1",
    releaseDate: new Date("2024-01-05"),
    releaseNote: "第一个版本，基本实现管理功能",
  },
];
