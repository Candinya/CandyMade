"use client";

import type { ProjectVersionHistory } from "@/types/project";
import RoughAgo from "@/components/RoughAgo";
import { useState } from "react";

const collapseBreakpoint = 3;

interface VersionHistoryProps {
  versionHistory: ProjectVersionHistory[];
}
const VersionHistory = ({ versionHistory }: VersionHistoryProps) => {
  const [isFullExpanded, setIsFullExpanded] = useState(
    versionHistory.length <= collapseBreakpoint,
  );

  return (
    <ul role="list" className="space-y-6">
      {(isFullExpanded
        ? versionHistory
        : versionHistory.slice(0, collapseBreakpoint)
      ).map((versionItem, index) => (
        <li key={versionItem.version} className="relative flex gap-x-4">
          {/*连接线*/}
          <div
            className={`absolute left-0 top-0 flex w-6 justify-center ${index === versionHistory.length - 1 ? "h-6" : "-bottom-6"}`}
          >
            <div className="w-px bg-gray-200 dark:bg-slate-700" />
          </div>

          {/*小圆圈*/}
          <div className="relative mt-3 flex h-6 w-6 flex-none items-center justify-center bg-white dark:bg-slate-800">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 dark:bg-slate-700 ring-1 ring-gray-300 dark:ring-slate-500" />
          </div>

          {/*发布详情*/}
          <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200 dark:ring-slate-600">
            <div className="flex justify-between gap-x-4">
              <div className="py-0.5 text-xs leading-5 text-gray-500">
                <span className="font-medium text-gray-900 dark:text-slate-100">
                  {versionItem.version}
                </span>
              </div>
              <div className="py-0.5 text-xs leading-5 text-gray-500 dark:text-slate-400">
                <RoughAgo date={versionItem.releaseDate} />
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-500 dark:text-slate-400 whitespace-pre-wrap">
              {versionItem.releaseNote.trim()}
            </p>
          </div>
        </li>
      ))}
      {!isFullExpanded && (
        <li className="relative flex gap-x-4">
          {/*连接线*/}
          <div className={`absolute left-0 top-0 flex w-6 justify-center h-6`}>
            <div className="w-px bg-gray-200 dark:bg-slate-700" />
          </div>

          {/*加号*/}
          <div className="relative mt-3 flex w-6 h-6 flex-none items-center justify-center bg-white dark:bg-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-4 rounded-full p-0.5 dark:fill-gray-100 fill-slate-700 ring-1 ring-gray-300 dark:ring-slate-500"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
            </svg>
          </div>

          {/*发布详情*/}
          <button
            className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200 dark:ring-slate-600 bg-gray-200 dark:bg-slate-700 bg-opacity-80 hover:bg-opacity-30 transition-colors"
            onClick={() => setIsFullExpanded(true)}
          >
            <div className="py-0.5 text-xs leading-5 text-gray-500">
              <span className="font-medium text-gray-900 dark:text-slate-100">
                展开全部
              </span>
            </div>
          </button>
        </li>
      )}
    </ul>
  );
};

export default VersionHistory;
