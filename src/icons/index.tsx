import type { ProjectPlatform, ProjectType } from "@/types/project";
import type { ReactNode, SVGProps } from "react";

import Windows from "./windows";
import Apple from "./apple";
import Linux from "./linux";
import Android from "./android";

import PCMonitor from "./pc-monitor";
import PhoneCameraFront from "./phone-camera-front";
import Responsive from "./responsive";
import BrowserFirefox from "./browser-firefox";
import AppStore from "./app-store";

const IconProjectPlatformMapping: {
  [key in ProjectPlatform]: (props: SVGProps<SVGSVGElement>) => ReactNode;
} = {
  Windows: Windows,
  macOS: Apple,
  Linux: Linux,
  Android: Android,
  iOS: Apple,
};

const IconProjectTypeMapping: {
  [key in ProjectType]: (props: SVGProps<SVGSVGElement>) => ReactNode;
} = {
  Desktop: PCMonitor,
  Mobile: PhoneCameraFront,
  AllPlatform: Responsive,
  Web: BrowserFirefox,
  Other: AppStore,
};

interface IconProjectPlatformProps {
  platform: ProjectPlatform;
  className?: string;
}
export const IconProjectPlatform = ({
  platform,
  className,
}: IconProjectPlatformProps) => {
  const Icon = IconProjectPlatformMapping[platform];
  return <Icon className={className} />;
};

interface IconProjectTypeProps {
  type: ProjectType;
  className?: string;
}
export const IconProjectType = ({ type, className }: IconProjectTypeProps) => {
  const Icon = IconProjectTypeMapping[type];
  return <Icon className={className} />;
};
