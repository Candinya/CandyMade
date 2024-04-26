import type { ProjectVersionHistory } from "@/types/project";
import { roughAgo } from "@/utils/roughAgo";

interface VersionHistoryProps {
  versionHistory: ProjectVersionHistory[];
}
const VersionHistory = ({ versionHistory }: VersionHistoryProps) => (
  <ul role="list" className="space-y-6">
    {versionHistory.map((versionItem, index) => (
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
            <time
              dateTime={versionItem.releaseDate.toISOString()}
              className="flex-none py-0.5 text-xs leading-5 text-gray-500 dark:text-slate-400"
            >
              {roughAgo(versionItem.releaseDate)}前
            </time>
          </div>
          <p className="text-sm leading-6 text-gray-500 dark:text-slate-400 whitespace-pre-wrap">
            {versionItem.releaseNote.trim()}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export default VersionHistory;
