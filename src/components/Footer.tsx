import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-[#090e34]">
            <div className="pt-[80px] pb-[40px] text-white px-4 max-w-[1240px] mx-auto">
                <div className="grid gap-5 md:gap-0 grid-cols-2 md:grid-cols-4">
                    <div className="md:mx-auto col-span-2 sm:col-span-1">
                        <h1 className="text-[35px] font-bold">Let's Talk!</h1>
                        <h6 className="font-bold opacity-70 text-[20px]">Contact Info</h6>
                        <ul className=" leading-[24px] mt-1 opacity-70 text-sm">
                            <li>Rufi.Aliyev@edu.rtu.lv</li>
                            <li>12 Hilton St, Manchester M1 1JF</li>
                            <li>+371 (24) 60 96 60</li>
                        </ul>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="font-bold text-[20px]">What I Do?</h1>
                        <ul className="leading-[30px] mt-3 opacity-70">
                            <li>The Studio</li>
                            <li>Sponsoring</li>
                            <li>Newsletter</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="font-bold text-[20px]">News</h1>
                        <ul className="leading-[30px] mt-3 opacity-70">
                            <li>Hot Stuff</li>
                            <li>Perfect Place</li>
                            <li>Vintage</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div className="md:mx-auto">
                        <h1 className="font-bold text-[20px]">Quick Links</h1>
                        <ul className="leading-[30px] mt-3 opacity-70">
                            <li>The Studio</li>
                            <li>Sponsoring</li>
                            <li>Newsletter</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[80px] border-opacity-20 pt-10 border-t border-width-1 border-[#717172]">
                    <ul className="justify-center flex gap-3 text-[17px] text-[#717172]">
                        <li className="p-1 text-[#090e34] text-[25px] opacity-70 bg-white rounded-full">
                            <Link to={"/"}>
                                <BiLogoFacebook />
                            </Link>
                        </li>
                        <li className="p-1 text-[#090e34] text-[25px] opacity-70 bg-white rounded-full">
                            <Link to={"/"}>
                                <BiLogoTwitter />
                            </Link>
                        </li>
                        <li className="p-1 text-[#090e34] text-[25px] opacity-70 bg-white rounded-full">
                            <Link to={"/"}>
                                <BiLogoInstagram />
                            </Link>
                        </li>
                        <li className="p-1 text-[#090e34] text-[25px] opacity-70 bg-white rounded-full">
                            <Link to={"/"}>
                                <BiLogoLinkedinSquare />
                            </Link>
                        </li>
                    </ul>
                    <h6 className="text-center opacity-70 mt-5 text-sm font-medium">All rights reserved by © Portfolio creative 2024</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer