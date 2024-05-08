"use client"
import React, { useEffect, useState } from "react";
import CommonButton from "./common/CommonButton";
import { tabData } from "./common/Helper";
import Sidebar from "./common/Sidebar";

const TabsParams = () => {
  const [params, setParams] = useState(tabData[0].id);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setParams(typeParam);
    }
  }, []);

  const clickHandler = (tabName) => {
    const value = tabName;
    window.history.pushState({}, "", `?type=${value}`);
    setParams(value);
  };

  return (
    <div>
      <Sidebar/>
      <div className="max-w-[1140px] mx-auto px-4 container pt-10">
        <div className="flex gap-6 mb-4">
          {tabData.map((obj, i) => (
            <CommonButton
              key={i}
              button={obj.tabName}
              onClick={() => clickHandler(obj.id)}
              className={`${
                params === obj.id
                  ? "bg-white border !border-black !border-solid !text-black"
                  : ""
              }`}
            />
          ))}
        </div>
        <div>
          {tabData.map((obj, i) => {
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
