"use client";
import { TAB_DATA } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CommonButton from "../common/CommonButton";
import Sidebar from "../common/Sidebar";

const TabsParams = () => {
  const [params, setParams] = useState(TAB_DATA[0].id);
  const router = useRouter();
  const pathname = router.pathname;
  useEffect(() => {
    const typeParam = new URLSearchParams(window.location.search).get("type");
    if (typeParam) {
      setParams(typeParam);
    }
  }, [pathname]);
  const clickHandler = (obj) => {
    const value = obj.replace(/\s+/g, "-");
    router.push(`?type=${value}`);
    setParams(value);
  };
  return (
    <div>
      <Sidebar />
      <div className="max-w-[1140px] mx-auto px-4 container pt-10">
        <div className="flex gap-6 mb-4">
          {TAB_DATA.map((obj, i) => (
            <CommonButton
              key={i}
              onClick={() => clickHandler(obj.id)}
              className={`${
                params === obj.id
                  ? "bg-white border !border-black !border-solid !text-black"
                  : ""
              }`}
            >{obj.tabName}</CommonButton>
          ))}
        </div>
        <div>
          {TAB_DATA.map((obj, i) => {
            return (
              <p
                key={i}
                className={`font-mono text-2xl text-black font-semibold ${
                  params === obj.id ? "block" : "hidden"
                }`}
              >
                {obj.tabContent}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabsParams;
