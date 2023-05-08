import React from "react";
import { useQuery } from "react-query";
import { getPaper } from "../../../lib/helpers";
import { useRouter } from "next/router";
import Image from "next/image";
import * as RiIcon from "react-icons/ri";
import Link from "next/link";

const PaperId = () => {
  const router = useRouter();
  const { paperId } = router.query;
  console.log(paperId);
  const { data, isLoading, isError } = useQuery(["papers", paperId], () =>
    getPaper(paperId)
  );

  if (isLoading) return <div>LOADING... </div>;
  console.log(data);
  return (
    <section
      className="pt-24 max-w-7xl mx-auto flex flex-col gap-x-5 items-center md:px-2 sm:px-1 sm:flex-row"
      key={data._id}
    >
      <div className="flex w-[95%] mx-auto  md:w-1/3 sm:w-[65%] sm:h-[450px] shadow-lg rounded-md">
        <div className="sm:w-[90%] w-[60%] flex items-center justify-center h-full  mx-auto">
          <img
            src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsfHx8fHx8MTY4MzM5NTY2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            className="object-contain w-full"
            alt={data.title}
          />
        </div>
      </div>
      <div className="w-full px-4 mt-5 sm:w-2/3 flex flex-col">
        <h3 className="text-xl my-2 ">
          <span className="font-medium ">Title</span> : {data.title}
        </h3>
        <p>
          <span className="font-medium text-xl ">Description</span> :{" "}
          {data.description}
        </p>
        <div className="flex items-center my-6">
          <button className="mx-2 cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full">
            <RiIcon.RiBookmarkLine size={25} />
          </button>
          <button className="mx-2 cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full">
            <RiIcon.RiHeart3Line size={25} />
          </button>
          <Link
            href={"/"}
            className="m-0 cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full"
          >
            <RiIcon.RiHome2Line size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaperId;
