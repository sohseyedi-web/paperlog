import * as RiIcon from 'react-icons/ri'
import Link from "next/link";

const PaperBox = ({item}) => {
  return (
    <div key={item._id} className="px-3 flex rounded-md shadow-md w-[90%] mx-auto md:mx-0 md:w-[48%] py-2 border border-indigo-300 ">
    <div className='w-1/3'>
      <img
        className="w-full h-[150px] object-cover rounded-md"
        src={
          "https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c29jaWFsfHx8fHx8MTY4MzM5NTY2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        }
      />
    </div>
    <div className=" w-2/3 mt-5 flex flex-col justify-between">
      <div className='ml-3'>
        <h4>{item.title}</h4>
        <p className="truncate">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-end gap-x-3">
        <button><RiIcon.RiBookmarkLine size={24}/></button>
        <button><RiIcon.RiHeart3Line size={24}/></button>
        <Link href={"/"}><RiIcon.RiArrowRightLine size={24}/></Link>
      </div>
    </div>
  </div>
  )
}

export default PaperBox