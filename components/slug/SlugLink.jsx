import { BLOG_POSTS_LIST } from '@/utils/helper'
import Link from 'next/link'

const SlugLink = () => {
  return (
    <div className="container mx-auto xl:px-0 px-5 xl:max-w-[1140px] pt-10">
        <div className='flex flex-wrap gap-4'>
        {BLOG_POSTS_LIST.map((obj, index) => (
            <Link key={index}
              href={`/slugpractice/${obj.title
                .replace(/'/g, "")
                .replace(/\:/g, "")
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
            
                      className="px-3 py-1 rounded-lg border border-solid border-transparent text-white font-mono font-bold bg-black hover:border-black hover:text-black hover:bg-white duration-300"
                    >
                      {obj.title}
            </Link>
        ))}
    </div>
    </div>
  )
}

export default SlugLink