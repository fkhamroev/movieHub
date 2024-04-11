import JohnWick from "../assets/posters/Poster.png";
import Harry from '../assets/posters/Harry_Potter_and_the_Philosopher.jpg'

type Props = {
  name: string;
  description: string;
  imgSrc: string;
};

export const headerSlider: Props[] = [
  {
    name: `John Wick 3 : Parabellum`,
    description: `John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.`,
    imgSrc: JohnWick,
  },
  {
    name: `Гарри Поттер и философский камень`,
    description: `Поздним вечером Альбус Дамблдор и Минерва Макгонагалл, профессора школы чародейства и волшебства Хогвартс, вместе с лесничим Рубеусом Хагридом доставляют недавно осиротевшего младенца Гарри Поттера магловскому семейству Дурслей, его единственным родственникам.`,
    imgSrc: Harry,
  },
];
