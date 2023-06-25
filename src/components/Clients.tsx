import { Link } from "react-router-dom"
import support1 from "../assets/support1.svg"
import support2 from "../assets/support2.svg"
import support3 from "../assets/support3.svg"
import support4 from "../assets/support4.svg"
const Clients = () => {
    return (
        <div className="bg-[#090e34] min-h-[500px]">
            <div className="text-center text-white px-4 max-width-[1240px]">
                <h1 className="font-bold text-[30px] my-5 pt-12">Some of My Happy Clients</h1>
                <p className="font-medium max-w-[700px] mx-auto text-[#959cb1]">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                <ul className="pb-[200px] flex flex-wrap gap-[10px] sm:gap-[30px] md:gap-[60px] items-center justify-center mt-12">
                    <li className="md:w-[140px] sm:w-[120px] w-[100px]">
                        <Link to="/" className="filter opacity-50 hover:opacity-100 grayscale hover:grayscale-0 duration-200">
                            <img src={support1} alt="" className="grayscale-0" />
                        </Link>
                    </li>
                    <li className="md:w-[140px] sm:w-[120px] w-[100px]">
                        <Link to="/" className="filter opacity-50 hover:opacity-100 grayscale hover:grayscale-0 duration-200">
                            <img src={support2} alt="" className="grayscale-0" />
                        </Link>
                    </li>
                    <li className="md:w-[140px] sm:w-[120px] w-[100px]">
                        <Link to="/" className="filter opacity-50 hover:opacity-100 grayscale hover:grayscale-0 duration-200">
                            <img src={support3} alt="" className="grayscale-0" />
                        </Link>
                    </li>
                    <li className="md:w-[140px] sm:w-[120px] w-[100px]">
                        <Link to="/" className="filter opacity-50 hover:opacity-100 grayscale hover:grayscale-0 duration-200">
                            <img src={support4} alt="" className="grayscale-0" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Clients