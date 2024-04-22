import TextLogo from "@/components/TextLogo";

const Hero = () => (
  <div className="px-6 py-8 lg:px-8 lg:py-12">
    <div className="mx-auto max-w-2xl text-center">
      <div className="w-72 lg:w-96">
        <TextLogo />
      </div>
      <p className="mt-6 text-xl leading-8 text-gray-600">
        <a
          href="https://ncd.moe"
          target="_blank"
          className="text-special-blue font-semibold transition-colors duration-200 underline underline-offset-2 decoration-wavy decoration-2 decoration-transparent hover:decoration-inherit"
        >
          @Candinya
        </a>{" "}
        的作品大放送！
      </p>
    </div>
  </div>
);

export default Hero;
