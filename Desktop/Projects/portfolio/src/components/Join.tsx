const Join = () => {
    return (
        <div className='mt-[-165px] px-4 rounded-md mx-auto max-w-[400px] sm:max-w-[550px] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1240px] bg-[#4a6cf8]'>
            <div className='py-10 text-center flex flex-col items-center'>
                <h1 className='max-w-[700px] text-white font-bold md:text-[30px] sm:text-[20px]'>Want to work together and create amazing products with me?</h1>
                <form action="" className='flex mt-10 border rounded-full bg-white bg-opacity-20 p-2'>
                    <input className='px-3 w-[150px] sm:w-[200px] md:w-[400px] placeholder-[#e0e0e0] outline-none bg-transparent text-white text-sm md:text-base' type="email" name="email" placeholder='Enter your email' />
                    <button type='submit' className='text-[#4a6cf8] bg-white py-2 px-6 rounded-full text-sm md:text-base whitespace-nowrap'>Get a Quote</button>
                </form>
            </div>
        </div>
    )
}

export default Join