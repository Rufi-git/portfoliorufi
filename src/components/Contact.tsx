const Contact = () => {
    return (
        <div className="my-[140px] px-4 max-w-[1240px] mx-auto">
            <div className="text-center">
                <h6 className="font-semibold text-[#4a6cf8]">Contact With Me</h6>
                <h1 className="text-[25px] md:text-[40px] font-bold">Have an Project in Mind?</h1>
                <p className="text-[#959cb1] font-semibold max-w-[700px] mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="md:px-4 mt-10">
                <form action="" className="gap-4 grid md:grid-cols-2">
                    <input className="py-3 col-span-2 md:col-span-1 px-3 bg-[#f8f8f9] outline-none" type="text" placeholder="Enter your name" />
                    <input className="py-3 col-span-2 md:col-span-1 px-3 bg-[#f8f8f9] outline-none" type="text" placeholder="Company (Optional)" />
                    <input className="py-3 col-span-2 md:col-span-1 px-3 bg-[#f8f8f9] outline-none" type="email" placeholder="Enter your email" />
                    <input className="py-3 col-span-2 md:col-span-1 px-3 bg-[#f8f8f9] outline-none" type="number" placeholder="Phone number" />
                    <textarea className=" h-[140px] col-span-2 py-2 px-3 bg-[#f8f8f9] outline-none" placeholder="Tell me about your project" />

                    <button type="submit" className="mt-3 py-3 px-6 md:py-4 md:px-8 text-sm font-semibold text-white rounded-full bg-[#4a6cf8] mx-auto col-span-2">Contact Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contact