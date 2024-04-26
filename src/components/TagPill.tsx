import type { PropsWithChildren } from "react";

interface TagPillProps extends PropsWithChildren {
  className: string;
}
const TagPill = ({ className, children }: TagPillProps) => (
  <div
    className={`px-4 py-1 rounded-full text-white dark:text-slate-800 font-semibold text-sm before:mr-1 ${className}`}
  >
    {children}
  </div>
);

export default TagPill;
