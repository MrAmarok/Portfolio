import Image from "next/image";

export function HeaderPage() {
  return (
    <div className="grid grid-cols-2 shadow-2xl h-[950px] items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row items-baseline space-x-2 font-bold">
          <p className="text-4xl">{"Hi! I'm"}</p>
          <p className="text-[#39C1AC] text-5xl">{"Marc MENDIA"}</p>
        </div>
        <p className="font-bold text-3xl">
          {"French Developer, tech enthusiast"}
        </p>
      </div>
      <div className="flex justify-center h-full">
        <Image
          src={"/winking-slimy-blue.png"}
          alt={"marc"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
