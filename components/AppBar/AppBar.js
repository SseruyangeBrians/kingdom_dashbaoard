import {}from'next/link'
import { navItemsdata } from "@/data/data";
import Link from 'next/link';
function AppBar() {
    return (
     <div className="h-[126vh] w-[200px] bg-[#5279AF]">
     <h1 className="text-center bg-[#5279AF] text-2xl font-bold text-white pt-6 ...">
        Kingdom Tv
     </h1>
     <ul>
    {navItemsdata.map(item=>(
    <li className="flex items-center text-white hover:bg-[#EF775E] hover:rounded-full  ">
    {item.icon}
    <span>{item.title}</span>
    </li>
    ))}
    </ul>

     </div>  
     
    );
  }
  
  export default AppBar;