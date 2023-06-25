// import { works } from "../data"
import { useEffect, useState } from "react"
import sanityClient, { urlFor } from '../../sanity.js';
interface Work {
    _id: string;
    image: string;
    short_description: string;
    title: string;
}
const Works = () => {
    const [works, setWorks] = useState<Work[]>([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="works"]{
            ...,
          }
        `).then(data => { setWorks(data) })
    }, [])
    return (
        <div className="my-[100px] px-4 items-center max-w-[1240px] mx-auto">
            <div className="flex flex-col items-center">
                <h6 className="text-[#5373f7] font-semibold">Creative Portfolios</h6>
                <h1 className="text-[30px] md:text-[40px] font-bold">Recent Works</h1>
                <p className="text-[#959cb1] text-center max-w-[700px]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="mt-5 flex flex-col items-center">
                <ul className="text-[14px] font-semibold text-[#959cb1] flex items-center gap-6">
                    <li className="cursor-pointer bg-[#5373f7] text-white py-1 px-4 rounded-full">All</li>
                    <li className="cursor-pointer">Web Design</li>
                    <li className="cursor-pointer">Design</li>
                    <li className="cursor-pointer">App</li>
                </ul>
                <div className="grid gap-12 my-8 md:grid-cols-2 sm:grid-cols-2">

                    {works.map((work) => {
                        return (
                            <div key={work._id} className="cursor-pointer">
                                <div className="relative group">
                                    <img src={urlFor(work.image).url()} alt="" className="" />
                                    <div className="hidden absolute top-[50%] group-hover:flex flex-col items-center justify-center left-[50%] text-[40px] transform translate-x-[-50%] translate-y-[-50%] bg-[#5373f7] bg-opacity-20 h-full w-full">
                                        <div className="w-[45px] h-[45px] flex justify-center items-center text-center font-thin bg-[#5373f7] rounded-full text-white">
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[450px]">
                                    <h1 className="hover:text-[#5373f7] text-lg font-semibold my-2">{work.title}</h1>
                                    <p className="text-[#959cb1] text-[14px] font-medium">{work.short_description}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Works