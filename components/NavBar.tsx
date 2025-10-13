"use client";
import Image from "next/image";
import { MediaButton } from "./button";
import { media } from "@/utils";

export function NavBar() {
  return (
    <div className="grid grid-cols-3 pr-8 pl-8 items-center flex-row h-[80px]">
      <div className="flex items-center space-x-7">
        <Image
          src={"/winking-slimy-blue.png"}
          width={80}
          height={80}
          alt={"logo slimy"}
        />
      </div>
      <ul className="flex justify-center space-x-6 font-bold text-2xl list-none">
        <li>
          <a href="#" className="hover:text-cyan-400">
            About me
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            My project
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400">
            Contact Me
          </a>
        </li>
      </ul>
      <div className="flex justify-end space-x-6 font-bold text-2xl">
        {media.map((item) => (
          <MediaButton
            key={item.name}
            hoverColor={item.hoverColor}
            icon={item.icon}
            name={item.name}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
