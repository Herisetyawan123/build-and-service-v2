import { type StaticImageData } from "next/legacy/image";

interface CardTeamProps {
  image: StaticImageData;
  name: string;
  description: string;
  instagram: string;
  github: string;
  linkedin: string;
}

export default CardTeamProps;
