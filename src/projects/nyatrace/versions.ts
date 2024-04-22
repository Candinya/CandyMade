import type { ProjectVersionHistory } from "@/types/project";

export const VersionHistory: ProjectVersionHistory[] = [
  {
    version: "0.1.10.0",
    releaseDate: new Date("2024-04-21"),
    releaseNote: `
## 更新内容

1. 去掉了日志文件生成，避免在不知情的情况下生成硬盘终结者
2. 修剪解析时输入的 hostname ，再也不怕不小心复制时候带上一些空格导致出现古怪的解析失败问题了
3. 加入了安装包支持（可有可无，方便有需要的用户，一般还是直接下载 .zip 比较好）
4. 附上了 \`vc_redist.x64.exe\` ，方便缺少运行环境的用户使用
5. 升级 OpenSSL 到了 v3 ，听起来应该是能减少一些安全漏洞的样子
6. 升级 libmaxminddb 到了 1.9.1 ，听起来应该是能减少一些 bug 的样子
7. 不想再为项目单独开域名了，把所有的作品都放到一个域名下面去吧，调整了包名和官网地址

## 存在的问题

- 理论上现在应该把日志输出到 stdout 和 stderr ，但它似乎有自己的想法，如果遇到不能运行的问题可以先看看会输出日志的旧版本怎么说
- Qt 5 已经老啦，看 Qt 6 的 QtLocation 之类的组件已经有了，有空研究研究升级吧
- DPI 缩放没有激活，在小屏幕设备上看着比较瞎眼睛（应该是能激活的，有空再看看）
- 构建流水线创建 release 时没找到 \`vc_redist.x64.exe\` 文件所以需要手动上传，看看能不能修好
`,
  },
  {
    version: "0.1.9.0",
    releaseDate: new Date("Dec 27, 2022"),
    releaseNote: `
加入解析功能
`,
  },
  {
    version: "0.1.8.1",
    releaseDate: new Date("Dec 9, 2022"),
    releaseNote: `
修复了地图在无有效点的情况下结束追踪时跳飞了的情况
`,
  },
  {
    version: "0.1.8.0",
    releaseDate: new Date("Dec 9, 2022"),
    releaseNote: `
加入了地图显示功能

1. 地图默认情况下是收缩的，即运行软件时首先看到的是表格；
2. 将鼠标移动到靠近右侧边的位置，可以看到一个拖动条，按住鼠标左键向左拖动就能让地图显示出来。
3. 您可自由拖动两边的大小以实现更佳的显示效果。
4. 路由追踪完成后地图会自动缩放到合适的大小方便您参阅路由全貌。点击表格中有地址的项，地图上也自动会跳到对应跳数的位置并放大，并给出提示信息方便参考。
5. 目前内置的地图功能使用的是 [WikiMedia Maps](https://maps.wikimedia.org/) 的服务，之后会推出配置项读写功能，您可以使用自己的地图服务器。
`,
  },
  {
    version: "0.1.7.1",
    releaseDate: new Date("Dec 7, 2022"),
    releaseNote: `
一些 UI 方面的小调整修正
`,
  },
  {
    version: "0.1.7.0",
    releaseDate: new Date("Dec 7, 2022"),
    releaseNote: `
加入主题系统支持（您也可以自定义您喜欢的主题）
`,
  },
  {
    version: "0.1.6.0",
    releaseDate: new Date("Dec 6, 2022"),
    releaseNote: `
加入了 IPv6 支持
！！注意请不要在没有 IPv6 地址的设备上使用 IPv6 路由追踪功能！！
`,
  },
  {
    version: "0.1.5.2",
    releaseDate: new Date("Dec 5, 2022"),
    releaseNote: `
一些小优化
`,
  },
  {
    version: "0.1.5.1",
    releaseDate: new Date("Dec 4, 2022"),
    releaseNote: `
修复了 v0.1.5.0 在轻量设备上因为线程数量限制得太低导致卡住的问题
`,
  },
  {
    version: "0.1.5",
    releaseDate: new Date("Dec 4, 2022"),
    releaseNote: `
好像有 bug ，先不要用

---

1. 把一些繁重的请求任务扔到了子线程里面，更不容易卡死主线程了
2. 发包模式更改为了无尽模式，不设置失败重试上限，在所有的节点都被发现之前唯一的结束方法是手动停止
3. 增加了失败累计的显示，看看哪些节点重试次数那么多
4. 丢掉了线程锁，用小技巧优化了一下体验
5. 增加了追踪计时，可以看看这一趟下来花了多久
`,
  },
  {
    version: "0.1.4",
    releaseDate: new Date("Dec 4, 2022"),
    releaseNote: `
1. 改用了 IPHLPAPI.DLL 替换较老的 icmp.dll ，希望能更现代化一些
2. 修复了中止追踪进程后依然有结果返回的问题
3. 升级了开发使用的 Qt 版本
4. 使用 GitHub Actions 进行构建工作
5. 不再关注对 MinGW 构建工具链的支持
`,
  },
  {
    version: "0.1.3",
    releaseDate: new Date("Dec 4, 2022"),
    releaseNote: `
使用多线程 + 多包尝试的追踪，以提升速度和追踪质量

**但我不太明白多线程的处理，如果因为过于玄学的操作导致程序卡爆了请一定开一个 issue ( PR 更好） ！！**
    `,
  },
  {
    version: "0.1.2",
    releaseDate: new Date("Dec 3, 2022"),
    releaseNote: `
1. 修复了防火墙拦截包的问题（请删掉因上个版本添加的防火墙规则来保障安全！！）
2. 防止中止追踪导致的崩溃
    `,
  },
  {
    version: "0.1.1",
    releaseDate: new Date("Dec 3, 2022"),
    releaseNote: `
1. 隐藏了无效的经纬度地址和 ASN
2. 稍微整理了一下代码
    `,
  },
];
