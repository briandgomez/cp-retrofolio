import React from "react";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as CgIcons from "react-icons/cg";

export const SideBarData = [
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
    hoverText: "About"
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <LuIcons.LuFolders />,
    cName: "nav-text",
    hoverText: "Projects"
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <CgIcons.CgFileDocument/>,
    cName: "nav-text",
    hoverText: "Resume"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
    hoverText: "Contact"
  },
];
