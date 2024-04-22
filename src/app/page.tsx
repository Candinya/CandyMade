import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { AllProjectsBasic } from "@/projects";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center p-8">
    <Hero />

    <div className="grid grid-cols-1 gap-4 w-full max-w-lg lg:max-w-4xl lg:grid-cols-2 2xl:max-w-7xl 2xl:grid-cols-3">
      {/*Project Cards*/}
      {AllProjectsBasic.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </main>
);

export default Home;
