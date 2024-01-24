import { FiTv } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { FaPhotoVideo } from "react-icons/fa";

function Appsub(){
    return(
        <div className="h-[200px] w-[1320px] bg-gray-200 flex justify-center items-center mt-1 space-x-10 float-right">
        

        <div class="bg-[#ffffff] p-0 m-2 w-[20%] h-[20vh] rounded-bl-lg relative rounded-tr-lg ...">
          <div>
            
          </div>
             
            <ul className="flex float-right w-[full] ">
               <li className="flex items-center text-2xl text-[#E28A69] pe-8 ...">
        
              <span>Total Stream</span>
              <FiTv className="m-5 ml-auto text-lg size-10 text-[#F7674A]" />
          </li>
         </ul> 
             <div className="bg-[#5279AF] h-[10vh] w-[100%] absolute bottom-0 p-0  rounded-bl-lg  ">
                   <h1 className="text-4xl font-bold text-center text-white">
                    3000
                    </h1>
                    
                 </div>
       </div>
       
       
       <div class="bg-[#FFFFFF] p-0 m-2 w-[20%] h-[20vh]  relative rounded-md ...  ">
<div className="flex w-full">
       <ul className="flex float-right w-[full]">
           <li className="flex items-center text-2xl text-[#E28A69] pe-8 ...">
            <span >Total Users</span>
                 <HiUsers className="m-5 ml-auto text-lg size-10  text-[#F7674A]" />
            </li>
        </ul>
</div>
      
             <div className="bg-[#E28A69] h-[10vh] w-[100%] absolute bottom-0 p-0  rounded-br-lg ... rounded-bl-lg ... ">
                   <h1 className="text-4xl font-bold text-center text-white">
                   2890
                    </h1>
                 </div>
       </div>

        
        <div class="bg-[#FFFFFF] p-0 m-2 w-[20%] h-[20vh] rounded-bl-lg relative rounded-tr-lg ...">

        <ul className="flex float-right w-[full] ">
               <li className="flex items-center text-2xl text-[#E28A69] pe-8 ...">
        
              <span>Total Stream</span>
                 <FaPhotoVideo className="m-5 ml-auto text-lg size-10  text-[#F7674A]"/>
          </li>
         </ul> 
             <div className="bg-[#5279AF] h-[10vh] w-[100%] absolute bottom-0 p-0  rounded-bl-lg  ">
                   <h1 className="text-4xl font-bold text-center text-white">
                    345
                    </h1>
                 </div>
       </div>
        
    </div>
    );
   
}



export default Appsub;