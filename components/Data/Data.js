import { FaHome } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";



export const names=[
    {icon:<FaHome size={20}/>,secondName:'Dashboard',active:true},
    {icon:<MdOutlineOndemandVideo size={24}/>, secondName:'Live',active:false},
    {icon:<MdPermMedia size={20} />, secondName:'Media',active:false},
    {icon:<HiUsers size={20} />, secondName:'Users',active:false},
    {icon:<RiAdminFill size={20} />, secondName:'Admins',active:false},
]