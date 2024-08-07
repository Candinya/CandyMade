import type { ProjectVersionHistory } from "@/types/project";

export const VersionHistory: ProjectVersionHistory[] = [
  {
    version: "0.2.3",
    releaseDate: new Date("2024-07-27"),
    releaseNote: `
1. 调整 Multirun 页面 Special Chars 功能展开图标
2. 优化 SSH 页面的右键菜单定位
3. 去掉了不再使用的依赖项
`,
  },
  {
    version: "0.2.2",
    releaseDate: new Date("2024-07-24"),
    releaseNote: `
1. 优化群控代码发送逻辑
2. 优化群控表格设计
3. 移除无用的首页
`,
  },
  {
    version: "0.2.1",
    releaseDate: new Date("2024-07-22"),
    releaseNote: `
1. 不再计划移动端支持，固定侧边导航栏位置
2. 修复 SSH 需要换行才能输出的问题
3. 调整特殊字符弹出卡片的位置
4. 添加代码高亮编辑器
`,
  },
  {
    version: "0.2.0",
    releaseDate: new Date("2024-07-19"),
    releaseNote: `
1. 取消仅限一个实例的限制逻辑
2. 当不止一个窗口存在时，关闭主窗口的操作会被变成最小化
3. 重构群控逻辑
4. 依赖升级更新
`,
  },
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
