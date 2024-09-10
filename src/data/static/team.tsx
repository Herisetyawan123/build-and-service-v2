import type CardTeamProps from '../interfaces/props/card-team';
import Rafi from '@/assets/profile-teams/rafi.png';
import Perdana from '@/assets/profile-teams/perdana.jpeg';
import Heri from '@/assets/profile-teams/heri.jpg';
import Faisal from '@/assets/profile-teams/faisal.jpg';
import Anhar from '@/assets/profile-teams/anhar.jpg';

const teamData: CardTeamProps[] = [
  {
    name: 'Perdana Putro H',
    description:
      "I'm a Fullstack Web Developer and Mobile Developer with Flutter",
    image: Perdana,
    instagram: 'https://www.instagram.com/per.danaph',
    github: 'https://www.github.com/perdanaph',
    linkedin: 'https://www.linkedin.com/in/perdana-putro-harwanto-1515a5245/'
  },
  {
    name: 'Heri Setyawan',
    description:
      "I'm a Fullstack Developer in website and mobile flutter developer.",
    image: Heri,
    instagram: 'https://www.instagram.com/herisetyawan233',
    github: 'https://www.github.com/herisetyawan123',
    linkedin: 'https://www.linkedin.com/in/heri-setyawan'
  },
  {
    name: 'Muhammad Rafi K.',
    description:
      "I'm a Fullstack Web Developer esspecially with laravel and mobile developer with Flutter",
    image: Rafi,
    instagram: 'https://www.instagram.com/muhhmmad.rafii',
    github: 'https://www.github.com/rafikusdiarto',
    linkedin: 'https://www.linkedin.com/in/muhammadrafikusdiarto'
  },
  {
    name: 'Faisal Bahari',
    description: "I'm a Front-End Web Developer experienced in using React.js",
    image: Faisal,
    instagram: 'https://www.instagram.com/faisallbhr',
    github: 'https://www.github.com/faisallbhr',
    linkedin: 'https://www.linkedin.com/in/faisallbhr'
  },
  {
    name: 'Anhar Lagi Sebel',
    description: "I can't do anything",
    image: Anhar,
    instagram: 'https://www.instagram.com/anhar_hampir_dapat/',
    github: 'https://www.github.com/anharsaja',
    linkedin: 'https://www.linkedin.com/in/'
  }
];
export default teamData;
