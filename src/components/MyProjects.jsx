
import { useScroll } from "framer-motion";
import React, { useState } from "react";

function Work() {
  
    const [imgs, setimgs] = useState(    [
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
        top: "50%",
        left: "50%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
        top: "56%",
        left: "44%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
        top: "45%",
        left: "56%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
        top: "60%",
        left: "53%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
        top: "43%",
        left: "40%",
        isActive: false,
      },
      {
        url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
        top: "68%",
        left: "57%",
        isActive: false,
      },
    ]);
    const{scrollYProgress}=useScroll()


    scrollYProgress.on("change",(data)=>{
      const imgshow = (arr)=>{
       setimgs(prev=>
      prev.map((item,index)=>
    arr.indexOf(index)=== -1 ?
    {...item,isActive:false}:
    {...item,isActive:true}
    ))
      }

      switch(Math.floor(data*100)){
        case 0:
          imgshow([])
          break;
        case 2:
          imgshow([0])
          break;
        case 4:
          imgshow([0,1])
          break;
        case 6:
          imgshow([0,1,2])
          break;
        case 7:
          imgshow([0,1,2,3])
          break;
        case 9:
          imgshow([0,1,2,3,4])
          break;
        case 11:
          imgshow([0,1,2,3,4,5])
          break;
      }
      
    })
  return (
    <div className="w-full mt-20">
      <div className="max-w-screen-lg mx-auto relative">
        <h1 className="sm:text-[25vw] text-[30vw] text-white text-center leading-none font-medium">
          Work
        </h1>
        <div className="absolute w-full h-full top-0">
            {imgs.map((item,index)=> item.isActive &&  <img key={index} className="w-40 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl absolute" style={{top:item.top, left:item.left}} src={item.url}></img>)}
        </div>
      </div>
    </div>
  );
}

export default Work;