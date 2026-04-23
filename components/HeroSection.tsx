import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-md text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Explore the things <span className="text-blue-600">you love.</span>
      </h1>

      <div className="mt-6 flex justify-center md:justify-start">
        <Image
          src="/person2.png"
          alt="Person"
          width={320}
          height={320}
          className="h-auto w-full max-w-xs rounded-3xl object-contain shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
