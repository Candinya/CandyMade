import { AllProjectsDetails, AllProjectsIDMap } from "@/projects";
import type { Metadata, ResolvingMetadata } from "next";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Divider from "@/components/Divider";
import { IconProjectPlatform } from "@/icons";
import BigLinkButton from "@/components/BigLinkButton";
import VersionHistory from "@/components/VersionHistory";
import type { ProjectDetailedInfo } from "@/types/project";
import type { PropsWithChildren } from "react";
import PoweredBy from "@/components/PoweredBy";

interface PartialProps {
  projectDetails: ProjectDetailedInfo;
}

const LogoTitle = ({ projectDetails }: PartialProps) => (
  <div className="pt-8 lg:pt-16 pb-8">
    <div className="text-center">
      <img
        className="mx-auto w-36 rounded-lg"
        src={projectDetails.logo}
        alt={projectDetails.name}
      />
      <h2 className="mt-6 text-4xl font-semibold">{projectDetails.name}</h2>
      <p className="mt-4 text-xl leading-8 text-gray-600">
        {projectDetails.slogan}
      </p>
    </div>
  </div>
);

interface TagPillProps extends PropsWithChildren {
  className: string;
}
const TagPill = ({ className, children }: TagPillProps) => (
  <div
    className={`px-4 py-1 rounded-full text-white font-semibold text-sm before:mr-1 ${className}`}
  >
    {children}
  </div>
);

const DetailedMisc = ({ projectDetails }: PartialProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-dashed">
    {/*详细介绍*/}
    <div className="col-span-2 px-6 py-4 my-4 border-l-8 border-gray-200">
      <p className="whitespace-pre-wrap">
        {projectDetails.introduction.trim()}
      </p>
    </div>

    {/*其他信息*/}
    <div className="col-span-1 gap-4 flex flex-col px-6">
      {/*源代码仓库*/}
      {projectDetails.sourceRepo && (
        <BigLinkButton
          href={projectDetails.sourceRepo}
          text="源代码"
          className={"bg-green-500 hover:bg-green-400"}
        />
      )}

      {/*下载链接*/}
      {projectDetails.downloadLink && (
        <BigLinkButton
          href={projectDetails.downloadLink}
          text="下载"
          className={"bg-blue-500 hover:bg-blue-400"}
        />
      )}

      <div className="my-1 py-1">
        <Divider label="系统支持" my="mb-2" />

        <div className="flex gap-4 justify-center">
          {projectDetails.platforms.map((platform) => (
            <IconProjectPlatform key={platform} platform={platform} />
          ))}
        </div>
      </div>

      <div className="my-1 py-1">
        <Divider label="语言" my="mb-2" />

        <div className="flex gap-4 justify-center">
          {projectDetails.languages.map((language) => (
            <TagPill
              key={language}
              className="bg-special-orange before:content-['@']"
            >
              {language}
            </TagPill>
          ))}
        </div>
      </div>

      <div className="my-1 py-1">
        <Divider label="技术栈" my="mb-2" />

        <div className="flex gap-4 justify-center flex-wrap">
          {projectDetails.techStacks.map((techStack) => (
            <TagPill
              key={techStack}
              className="bg-special-blue before:content-['#']"
            >
              {techStack}
            </TagPill>
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { slug } = params;
  const projectDetails = AllProjectsIDMap[slug];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:pt-16">
      <div className="w-full max-w-lg lg:max-w-4xl 2xl:max-w-7xl 2xl:grid-cols-3">
        {/*LOGO 和 标题*/}
        <LogoTitle projectDetails={projectDetails} />

        {/*详细信息*/}
        <div className="bg-white shadow-md px-4 pt-1 pb-5 sm:px-6 rounded-lg">
          {/*屏幕截图*/}
          {projectDetails.screenshots.length > 0 && (
            <>
              <Divider label="屏幕截图" />
              <ScreenshotCarousel screenshots={projectDetails.screenshots} />
            </>
          )}

          {/*介绍和链接等等杂项信息*/}
          <Divider label="详细信息" />

          <DetailedMisc projectDetails={projectDetails} />

          {/*版本历史*/}
          {projectDetails.versionHistory.length > 0 && (
            <>
              <Divider label="版本历史" />
              <div className="max-w-lg mx-auto my-8">
                <VersionHistory
                  versionHistory={projectDetails.versionHistory}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/*页脚信息*/}
      <PoweredBy />
    </main>
  );
};

export const generateMetadata = async (
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  // read route params
  const { slug } = params;
  const projectDetails = AllProjectsIDMap[slug];

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: projectDetails.name,
    description: projectDetails.slogan,
    icons: projectDetails.logo,
    applicationName: projectDetails.name,
    keywords: projectDetails.techStacks, // 想想怎么优化一下？
    openGraph: {
      description: projectDetails.slogan,
      images: projectDetails.screenshots.map(
        (screenshot) => screenshot.imageUrl,
      ),
    },
    metadataBase: new URL("https://candymade.net"),
    authors: {
      name: "Nya Candy",
      url: "https://ncd.moe",
    },
  };
};

const projects = AllProjectsDetails;

// export const dynamicParams = false; // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams

export const generateStaticParams = async () => {
  return projects.map((project) => ({
    slug: project.id,
  }));
};

export default ProjectPage;
