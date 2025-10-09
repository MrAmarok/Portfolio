import Image from "next/image";

interface MediaButtonProps {
  icon: string;
  name: string;
  hoverColor: string;
  url: string;
}

export function MediaButton({ hoverColor, icon, name, url }: MediaButtonProps) {
  return (
    <a
      className={`flex items-center justify-center rounded-full bg-[#5A5E66] hover:bg-[${hoverColor}] w-[50px] h-[50px]`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={icon} alt={`${name} icon`} width={40} height={40} />
    </a>
  );
}
