
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import sanityClient, { urlFor } from '../../sanity.js';
interface Blog {
    _id: string;
    title: string;
    short_description: string;
    image: string;
}
const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="blogs"]{
            ...,
          }
        `).then(data => { setBlogs(data) })
    }, [])
    return (
        <div className="mt-[90px] px-8 md:px-4 mx-auto max-w-[1240px]">
            <div className="text-center">
                <h6 className="font-semibold text-[#4a6cf8]">Recent Posts</h6>
                <h1 className="font-bold text-[30px] md:text-[40px]">From The Blog</h1>
                <p className="font-semibold text-[#959cb1] max-w-[700px] mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="grid gap-4 my-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs?.map((blog) => {
                    return (
                        <div key={blog._id} className="border rounded-2xl">
                            <img className="w-full rounded-t-xl" src={urlFor(blog.image).url()} alt="" />
                            <div className="p-5">
                                <h1 className="font-semibold my-2 text-[18px]">{blog.title}</h1>
                                <p className="text-sm font-semibold text-[#959cb1] mb-3">{blog.short_description}</p>
                                <Link to={"/"} className="text-sm underline font-semibold">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog