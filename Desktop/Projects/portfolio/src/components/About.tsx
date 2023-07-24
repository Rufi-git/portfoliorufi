import { BiLogoFacebook, BiLogoTwitter, BiLogoYoutube, BiLogoLinkedinSquare } from "react-icons/bi"
import { Link } from "react-router-dom"
const About = () => {
    return (
        <div className="border-width-1 border-b">
            <div className="my-[60px] pb-[50px] px-12 grid gap-8 mx-auto max-w-[1240px] grid-cols-1 md:grid-cols-2 md:px-4">
                <div>
                    <h6 className="text-[#5373f7] uppercase font-bold">About Me</h6>
                    <h1 className="text-[30px] md:text-[40px] font-bold leading-10 my-3">Better design, better experience</h1>
                    <p className="text-[#959cb1] font-semibold mt-4 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
                </div>
                <div>
                    <h1 className="font-semibold text-[25px] tracking-wide">Connect With Me</h1>
                    <p className="text-[#959cb1] font-semibold my-5 text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.</p>
                    <ul className="flex gap-3 text-[17px] text-[#959cb1]">
                        <li className="p-2 border-2 rounded-full">
                            <Link to={"/"}>
                                <BiLogoFacebook />
                            </Link>
                        </li>
                        <li className="p-2 border-2 rounded-full">
                            <Link to={"/"}>
                                <BiLogoTwitter />
                            </Link>
                        </li>
                        <li className="p-2 border-2 rounded-full">
                            <Link to={"/"}>
                                <BiLogoYoutube />
                            </Link>
                        </li>
                        <li className="p-2 border-2 rounded-full">
                            <Link to={"/"}>
                                <BiLogoLinkedinSquare />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default About