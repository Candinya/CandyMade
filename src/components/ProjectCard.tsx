import type { ProjectBasicInfo } from "@/types/project";
import Link from "next/link";
import { IconProjectType } from "@/icons";
import { TranslationProjectType } from "@/translations/projectType";
import ConfidentialBar from "@/components/ConfidentialBar";
import Divider from "@/components/Divider";

interface ProjectCardProps {
  project: ProjectBasicInfo;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/${project.id}`}
      className="flex flex-col relative group border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-800 drop-shadow-lg shadow-gray-200 dark:shadow-gray-600 hover:bg-gray-50 dark:hover:bg-slate-750 hover:drop-shadow-xl transition-all px-4 py-5 sm:px-6 rounded-lg overflow-hidden"
    >
      {/*项目 Logo 和 名称*/}
      <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
        <img
          className="rounded-lg transition-all w-16 h-16"
          src={project.logo}
          alt={project.name}
        />
        <div className="">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {project.slogan}
          </p>
        </div>
      </div>

      {/*平台支持图标*/}
      <div className="absolute bottom-1 right-2">
        <IconProjectType
          type={project.type}
          className="w-24 h-24 text-gray-200 dark:text-slate-700"
        />
      </div>

      {/*开源图标*/}
      {project.sourceRepo && (
        <div className="absolute top-3 -right-9 text-white dark:text-slate-800 bg-green-500 font-semibold text-lg px-12 py-1 rotate-45">
          开源
        </div>
      )}

      {/*项目基本信息*/}
      <Divider />

      <div className="relative text-slate-900 dark:text-white">
        <ul>
          <li className="flex justify-between">
            <span className="font-semibold">初次提交</span>
            <span>
              {project.startFrom.getUTCFullYear()} 年{" "}
              {project.startFrom.getUTCMonth() + 1} 月{" "}
              {project.startFrom.getUTCDate()} 日
            </span>
          </li>
          <li className="flex justify-between mt-2">
            <span className="font-semibold">支持平台</span>
            <span>{TranslationProjectType[project.type]}</span>
          </li>
          {project.license && (
            <li className="flex justify-between mt-2">
              <span className="font-semibold">许可证</span>
              <span>{project.license}</span>
            </li>
          )}
        </ul>
      </div>

      {/*是否正在开发*/}
      {!project.isPublished && (
        <div className="absolute w-full h-full top-0 left-0">
          <div className="w-full h-full bg-yellow-800 opacity-75" />
          <ConfidentialBar className="rotate-30 px-72 top-8 -right-60" />
          <ConfidentialBar className="rotate-45 px-72 top-1/2 -left-1/3 lg:hidden" />
          <ConfidentialBar className="rotate-60 px-72 top-2/3 -right-1/3" />
          <ConfidentialBar className="rotate-30 px-72 bottom-8 -left-60" />
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
