import type { ProjectBasicInfo, ProjectDetailedInfo } from "@/types/project";

export const NekopsBasic: ProjectBasicInfo = {
  id: "nekops",
  name: "Nekops",
  slogan: "Ops' now nyaing",
  logo: "/logos/nekops.png",
  type: "Application",
  isOpenSource: false,
  sourceRepo: "https://nya.codes/Candinya/Nekops",
  startFrom: new Date("2023-12-01"),
  state: "Published",
};

export const NekopsDetails: ProjectDetailedInfo = {
  ...NekopsBasic,
  introduction:
    "一款进阶的服务器（SSH）管理工具。" +
    "基于 Nyawork 的服务器管理需求定制，使用 JSON 格式存储文件，方便 Git 版本管理；使用 tweetnacl 加密关键数据，避免隐私泄露。" +
    "复制 SSH 连接命令或是直接发起请求，多种调用方式自由选择。" +
    "简单易行的跳板机管理，快速安全的连接方式。",
  techStacks: ["Tauri", "Vite", "React", "TypeScript"],
  languages: ["English"],
  screenshots: [],
  downloadLink: null,
  versionHistory: [
    {
      version: "0.0.1",
      releaseDate: new Date("2024-01-05"),
      releaseNote: "第一个版本，基本实现管理功能",
    },
    {
      version: "0.0.2",
      releaseDate: new Date("2024-01-30"),
      releaseNote:
        "添加跳板机连接支持，调整 SSH 页面的右键菜单逻辑，添加实验性多重运行入口",
    },
    {
      version: "0.1.0",
      releaseDate: new Date("2024-04-21"),
      releaseNote: "更新底层 Tauri 版本，调整项目域名，优化搜索体验",
    },
    {
      version: "0.1.1",
      releaseDate: new Date("2024-04-21"),
      releaseNote: "优化窗口控制逻辑",
    },
  ],
};
