import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { BiBookOpen } from "@react-icons/all-files/bi/BiBookOpen";

export const links = [
  { id: 1, link: "/#", title: "Home" },
  { id: 2, link: "/#about", title: "About" },
  { id: 3, link: "/#skills", title: "Skills" },
  { id: 4, link: "/#portfolio", title: "Portfolio" },
  { id: 5, link: "/#comments", title: "Comments" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.instagram.com/min.s_lf/",
    icon: <AiOutlineInstagram />,
  },
  { id: 3, link: "https://developer-jm.tistory.com/", icon: <BiBookOpen /> },
  { id: 4, link: "https://github.com/gyflsakfn", icon: <AiFillGithub /> },
];
