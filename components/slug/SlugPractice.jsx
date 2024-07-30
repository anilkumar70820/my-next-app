"use client";
import { BLOG_POSTS_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import { AdminIcon, CommentIcon, DateIcon } from "../common/Icons";
import Image from "next/image";

const SlugPractice = () => {
  const params = useParams();
  const CombinedNewsList = [...BLOG_POSTS_LIST];
  const paramsValue = params["slug"];
  const DETAIL_VALUE = CombinedNewsList.find(
    (project) =>
      project.title
        .replace(/'/g, "")
        .replace(/\:/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase() === paramsValue
  );
  if (!DETAIL_VALUE) {
    return <div>News item not found</div>;
  }
  return (
    <div className="py-12">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-5">
        <div className="flex gap-6 md:flex-row flex-col justify-center md:items-start items-center">
          <div className="">
            <Image
              className="mb-[30px] xl:w-[747px] xl:h-[474px] lg:w-[596px] lg:h-[397px] md:w-[404px] md:h-[269px] sm:w-[600px] sm:h-[400px] min-w-[300px] min-h-[200px]"
              src={DETAIL_VALUE.image}
              alt="game-image"
              width={747}
              height={474}
            />
            <div className="flex items-center gap-x-9 gap-y-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <AdminIcon />
                <p className="font-normal lg:text-lg md:text-base text-sm text-black !leading-120 font-orbitron">
                  {DETAIL_VALUE.admin}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <DateIcon />
                <p className="font-normal lg:text-lg md:text-base text-sm text-black !leading-120 font-orbitron">
                  {DETAIL_VALUE.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CommentIcon />
                <p className="font-normal lg:text-lg md:text-base text-sm text-black !leading-120 font-orbitron">
                  {DETAIL_VALUE.comments} Comments
                </p>
              </div>
            </div>
            <div>
              <h2 className="lg:text-custom-xxl md:text-2xl text-xl font-bold text-black font-orbitron mb-0.5 !leading-130">
                {DETAIL_VALUE.title}
              </h2>
              <p className="mt-3 text-black font-poppins font-normal lg:text-lg md:text-base text-sm !leading-160">
                {DETAIL_VALUE.description}
              </p>
              {DETAIL_VALUE.brief.map((obj, i) => (
                <p
                  key={i}
                  className="mt-3 text-black font-poppins font-normal lg:text-lg md:text-base text-sm leading-160  dangerouslyHTML"
                  dangerouslySetInnerHTML={{ __html: obj }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPractice;
