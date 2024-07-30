import Link from "next/link";
import Sidebar from "./common/Sidebar";
import { HOME_PAGE_BUTTONS } from "@/utils/helper";
import Button from "./common/Button";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <div className="max-w-[1140px] mx-auto px-3 pt-5">
        <div className="flex flex-wrap gap-6">
          {HOME_PAGE_BUTTONS.map((obj,i)=>{
            return(
           <Button key={i} href={obj.link}>
            {obj.linkText}
           </Button>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
