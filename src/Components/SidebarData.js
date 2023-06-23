import React from "react";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";

export const SideBarData = [
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <LuIcons.LuFolders />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <AiIcons.AiOutlineDownload />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
  },
];
