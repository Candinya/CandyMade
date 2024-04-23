# CandyMade

## 开始使用

### 定义主页

主页最顶上的大图和介绍在 `src/components/Hero.tsx` ，您可以自行修改这个组件来替换掉它。

### 定义项目

主要的项目定义在 `src/projects` 目录下的对应目录中，这里我们提供了一个模板项目 `template` 供您可以直接复制修改，您也可以参考其他现有的项目填写相关的信息。

为了方便共用资源文件（如项目 LOGO 和屏幕截图）在其他地方使用，我们推荐您将这些资源文件放在 `public/assets` 目录中。当然，您完全可以根据您的喜好组织对应的资源结构。

### 展示项目

当项目定义完成后，请在 `src/projects/index.ts` 文件中按照上面的定义将项目的简单介绍和详细信息分别添加到 `AllProjectsBasic` 和 `AllProjectsDetails` 中。
项目会自动读取这两个变量，并为您生成对应的结构。

- 如果您不希望某个项目被展示在主页，但又希望能为它提供独立页面的话，您可以不在 `AllProjectsBasic` 中放置它。
- 对应的，如果您只希望某个项目在主页呈现，而不希望它拥有自己的详情页的话，可以不在 `AllProjectsDetails` 中放置它。

## 二次开发

### 技术栈

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

### 项目结构

```
├───public           -> 资源（构建时直接被原样复制到结果中）
└───src
    ├───app          -> 项目页面路由
    ├───components   -> 主要组件
    ├───icons        -> 使用到的图标
    ├───projects     -> 展示项目配置
    ├───translations -> 文本映射（翻译）
    ├───types        -> 类型定义
    └───utils        -> 实用工具
```

## 开源许可

- 项目的代码部分基本基于 MIT 许可附带附加条款授权，这意味着您可以在遵守附加条款的情况下自由 fork 并变更这个项目，并自由使用在任何商业/非商业，或是开源/非开源的场合。
- 项目的资源部分（ public/assets 目录下的内容）为 Nya Candy 版权所有，请不要在任何其他地方使用。
