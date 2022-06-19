import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IFullDataStory } from "../../Types/Story-type";

const CardStory = ({ data }: { data: IFullDataStory }) => {
  //   console.log(data, "<< getServerSide");
  return (
    <>
      <div className="w-full min-h-screen flex-wrap flex  xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark bg-yellowLight">
        {data.data.map((item, idx) => (
          <div
            key={idx}
            className="w-[25%] hover:shadow-lg overflow-hidden rounded-lg h-[40vh] bg-yellowNav dark:bg-blackCard"
          >
            <div className="w-full overflow-hidden h-[25vh] bg-red-500 ">
              <img src={item.image} className="object-cover w-full" />
            </div>
            <div className="p-2">
              <div className="pb-2">
                <p className="text-sm text-slate-400 ">
                  {item.author.username}
                </p>
              </div>
              <Link href={`/story/${item.slug}`}>
                <h1 className="text-blue-500 cursor-pointer underline font-semibold text-[1.3rem]">
                  {item.title}
                </h1>
              </Link>
              {/* <p className="dark:text-white">{item.content.split(2) + "..."}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardStory;
