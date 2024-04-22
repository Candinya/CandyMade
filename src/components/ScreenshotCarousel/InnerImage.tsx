import type { ProjectScreenShot } from "@/types/project";

interface InnerImageProps {
  screenshot: ProjectScreenShot;
  isActive: boolean;
}
const InnerImage = ({ screenshot, isActive }: InnerImageProps) => (
  <div
    className={`transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    <img
      src={screenshot.imageUrl}
      className="absolute block h-full w-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt={screenshot.title}
    />
  </div>
);

export default InnerImage;
