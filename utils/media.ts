import {
  faGithub,
  faLinkedinIn,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export type mediaProps = {
  name: string;
  icon: IconDefinition;
  url: string;
  hoverColor: string;
};

export const media: mediaProps[] = [
  {
    name: "Github",
    icon: faGithub,
    url: "https://www.github.com/Dvaking",
    hoverColor: "#3f4650",
  },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/marc-mendia/",
    hoverColor: "#007ab5",
  },
  {
    name: "Cv",
    icon: faFile,
    url: "/cv-2025.pdf",
    hoverColor: "#fc0000",
  },
];
