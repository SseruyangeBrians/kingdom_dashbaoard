import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function SideNav() {
    return (
      <div className="h-[75px] w-[1320px] flex items-center float-right rounded-tr-lg bg-gray-200 p-4 flex items-center ">
        <h1 className="mr-4 text-2xl font-bold text-blue-600/75">Dashboard</h1>
     
       
      
        <div className=" bg-gray-200 w-[900%] h-[50px] flex items-center justify-center"> 
            
       <input
          type="text"
          className="pp-2 px-4 bg-white outline-none rounded-xl w-[300px] h-[30px]  "
          placeholder="Search..."
        />
       </div>

      
      <div className="flex w-[800px] float-right flex">
  <IoMdNotifications className="m-5 ml-auto text-lg size-10  text-[#F7674A]" />
  <CgProfile className="m-5 text-lg size-10  text-[#F7674A]" />
</div>


        </div>
      
     
    );
  }
  
  export default SideNav;