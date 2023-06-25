import { feedbacks } from "../data"

const Feedback = () => {
    return (
        <div className="px-4 mx-auto max-w-[1240px]">
            <div className="text-center">
                <h6 className="font-semibold text-[#4a6cf8]">Awesome Testimonials</h6>
                <h1 className="text-[30px] md:text-[40px] font-bold">Hear From My Clients</h1>
                <p className="text-[#959cb1] font-semibold max-w-[700px] mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="my-8 gap-7 grid md:grid-cols-2">
                {feedbacks.map((feedback) => {
                    return (
                        <div key={feedback.id} className="shadow-md rounded-md p-8">
                            <img className="max-w-[90px] mb-4" src={feedback.companyLogo} alt="" />
                            <p className="text-[#959cb1] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                            <div className="flex items-center gap-2">
                                <img className="max-w-[40px] md:max-w-[60px]" src={feedback.image} alt="" />
                                <div>
                                    <h1 className="text-sm font-bold">{feedback.fullName}</h1>
                                    <p className="text-sm text-[#959cb1]">{feedback.company}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Feedback