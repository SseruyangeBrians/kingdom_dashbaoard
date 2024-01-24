import { FaHome, FaUserTie } from "react-icons/fa";
import { MdOutlineLiveTv, MdPermMedia } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";
import { IoMdExit } from "react-icons/io";


export const navItemsdata=[
      {icon:<FaHome className="m-5 text-lg text-white size-6" />,title:'dashboard'},
    {icon:<MdOutlineLiveTv className="m-5 text-lg text-white size-6" />,title:'Live'},
    {icon:<MdPermMedia className="m-5 text-lg text-white size-6"/>,title:'Media'},
    {icon:<TbUsers className="m-5 text-lg text-white size-6" />,title:'Users'},
    {icon:<FaUserTie className="m-5 text-lg text-white size-6" />,title:'Admins'},
    {icon:<TiMessages className="m-5 text-lg text-white size-6" />,title:'Notifications'},
    {icon:<IoMdSettings  className="m-5 text-lg text-white size-6" />,title:'Settings'},
    {icon:<IoMdExit  className="m-5 text-lg text-white size-6" />,title:'Settings'},
];