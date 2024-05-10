import Link from "next/link";
import React from "react";
import CommonButton from "./common/CommonButton";
import Sidebar from "./common/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <div className="max-w-[1140px] mx-auto px-3 pt-5">
        <div className="flex flex-wrap gap-6">
          <Link href="/paramstabs">
            <CommonButton button={"Params Tabs"} />
          </Link>
          <Link href="/apifetch">
            <CommonButton button={"Api Fetch"} />
          </Link>
          <Link href="/localstoragetabs">
            <CommonButton button={"Local Storage Tabs"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
