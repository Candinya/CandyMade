import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-16">
      <Hero />

      <div className="mb-32 grid grid-cols-1 text-center md:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {/*Project Cards*/}
      </div>
    </main>
  );
}
