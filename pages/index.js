import Head from "next/head";
import { useQuery } from "react-query";
import { getPapers } from "./../lib/helpers";
import * as RiIcon from 'react-icons/ri'
import Link from "next/link";
import PaperBox from "../components/PaperBox";

export default function Home() {
  const { data, isLoading, isError } = useQuery("papers", getPapers);

  if (isLoading) return <div>LOADING... </div>;

  return (
    <>
      <Head>
        <title>TodoApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="max-w-7xl mx-auto py-20 flex items-center justify-between flex-wrap flex-col md:flex-row gap-y-4">
        {/* <div className="px-3 flex  rounded-md shadow-md w-[90%] mx-auto md:mx-0 md:w-[48%] py-2 border border-indigo-300 ">
          <div>
            <img
              className=" h-[150px] object-cover rounded-md"
              src={
                "https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsfHx8fHx8MTY4MzM5NTY2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              }
            />
          </div>
          <div className="ml-5 w-2/3 mt-5 flex flex-col justify-between">
            <div>
              <h4>Soheil Seyedi</h4>
              <p className="truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque In egestas
                erat imperdiet sed euismod nisi porta lorem mollis Morbi
                tristique senectus et netus Mattis pellentesque id nibh tortor
                id aliquet lectus proin
              </p>
            </div>
            <div className="flex items-center justify-end gap-x-3">
              <button><RiIcon.RiBookmarkLine size={24}/></button>
              <button><RiIcon.RiHeart3Line size={24}/></button>
              <Link href={"/"}><RiIcon.RiArrowRightLine size={24}/></Link>
            </div>
          </div>
        </div> */}
        {data?.map((item) => (
          <PaperBox key={item._id} item={item}/>
        ))}
      </section>
    </>
  );
}
