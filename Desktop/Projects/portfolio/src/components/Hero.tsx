import Myphoto from "../assets/myphoto.png"
import Myphoto2 from "../assets/myphoto2.png"

const Hero = () => {
    return (
        <div className="overflow-hidden mt-[50px] px-4">
            <div className="grid md:justify-between items-center grid-col-1 md:grid-cols-2 max-w-[1240px] mx-auto">
                <div className="justify-center w-full relative flex-col">
                    <p className="text-[#4a6cf8] font-semibold">Hey There 👋 I am</p>
                    <h1 className="font-bold text-[40px]">Rufi Aliyev</h1>
                    <h6 className="text-[#959cb1] text-[17px] font-[600]">Professional <span className="text-black">Web Developer</span></h6>
                    <p className="text-[#959cb1] mt-3 text-[14px] font-[600] max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.</p>
                    <div className="flex gap-4 my-6 font-semibold text-[15px]">
                        <button className="rounded-full text-white py-3 px-8 bg-[#5373f7]">Contact Me</button>
                        <button className="rounded-full text-white py-3 px-8 bg-black">Learn More</button>
                    </div>
                </div>
                <div className="relative mt-[70px] md:mt-0 md:ml-auto w-full flex justify-center">
                    <img className="md:ml-auto lg:w-[450px] md:w-[350px] sm:w-[400px] w-[350px]" src={Myphoto} alt="" />
                    <div className="absolute z-[-10] bottom-0 md:right-0 bg-[#5373f7] w-[340px] h-[340px] sm:w-[460px] sm:h-[450px] md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[500px]" style={{ borderRadius: "66% 34% 45% 55% / 59% 69% 31% 41% " }}></div>
                </div>
            </div>
        </div>
    )
}

export default Hero