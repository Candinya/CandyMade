import type { ReactNode } from "react";
import type { ProjectBasicInfo } from "@/types/project";

interface ProjectCardProps {
  icon: ReactNode;
  project: ProjectBasicInfo;
}
const ProjectCard = ({ icon, project }: ProjectCardProps) => {
  return <>{project.name}</>;
};

export default ProjectCard;
