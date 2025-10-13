import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MediaButtonProps {
  icon: IconDefinition;
  name: string;
  hoverColor: string;
  url: string;
}

export function MediaButton({ hoverColor, icon, name, url }: MediaButtonProps) {
  return (
    <a
      className="flex items-center justify-center rounded-full bg-[#5A5E66] w-[50px] h-[50px] transition-colors"
      style={{
        ...(hoverColor && {
          '--hover-bg': hoverColor,
        }),
      } as React.CSSProperties}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = hoverColor;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = '#5A5E66';
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} icon`}
    >
      <FontAwesomeIcon
        icon={icon}
        color="white"
        fontSize="25px"
        className="items-center justify-center"
      />
    </a>
  );
}
