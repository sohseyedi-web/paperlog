import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as RiIcon from "react-icons/ri";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-100 dark:bg-slate-900 w-full py-3 px-2 fixed top-0 left-0 z-30">
      <div className="flex items-center justify-between container mx-auto max-w-7xl">
        <h3 className="text-indigo-600 font-semibold text-2xl">Paperlog</h3>
        <div
          className={`flex items-center gap-x-3`}
        >
          {session ? (
            <>
              <div onClick={() => signOut()} className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-indigo-600 rounded-full">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={session.user.image}
                  alt={session.user.name}
                />
                
              </div>

              <Link
                href={"/addpaper"}
                className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full"
              >
                <div className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-indigo-600 rounded-full">
                  <RiIcon.RiQuillPenLine size={25} />
                </div>
              </Link>
            </>
          ) : (
            <Link
              href={"/auth"}
              className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-blue-500 rounded-full"
            >
              <div className="cursor-pointer flex items-center justify-center border w-[45px] h-[45px] border-indigo-300 dark:border-indigo-800 text-indigo-600 rounded-full">
                <RiIcon.RiUser6Line size={25} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
