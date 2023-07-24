import { useEffect, useState } from "react"
// import { educations, experiences } from "../data"
import sanityClient from '../../sanity.js';
interface EdEx {
    _id: string;
    faculty: string;
    short_description: string;
    organization: string;
    startDate: number;
    endDate: number;
}
const Resume = () => {
    const [educations, setEducations] = useState<EdEx[]>([])
    const [experiences, setExperiences] = useState<EdEx[]>([])
    useEffect(() => {
        sanityClient.fetch(`
        *[_type=="educations"]{
            ...,
          }
        `).then(data => { setEducations(data) })

        sanityClient.fetch(`
        *[_type=="experiences"]{
            ...,
          }
        `).then(data => { setExperiences(data) })
    }, [])
    return (
        <div className="my-[100px] px-4 mx-auto max-w-[1240px]">
            <div className="text-center">
                <h6 className="font-semibold text-[#4a6cf8]">Education & Experience</h6>
                <h1 className="font-bold text-[30px] md:text-[40px]">My Resume</h1>
                <p className="font-medium text-[#959cb1] max-w-[700px] mx-auto">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
                <div className="mt-10">
                    <h1 className="font-bold mb-4 text-[20px] md:text-[25px]">My Education</h1>
                    <div className="grid gap-8 grid-cols-1">

                        {educations.map((education) => {
                            return (
                                <div key={education._id} className="shadow-md border rounded-md p-4 max-w-[560px]">
                                    <p className="text-sm font-semibold text-white rounded-md bg-[#4a6cf8] inline-block px-1">{education.startDate}-{education.endDate}</p>
                                    <h1 className="mt-2 font-medium text-[23px]">{education.faculty}</h1>
                                    <h6 className="mt-1 text-[15px]">{education.organization}</h6>
                                    <p className="mt-2 text-[#959cb1] font-medium text-[14px]">{education.short_description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-10 md:ml-auto">
                    <h1 className="font-bold mb-4 text-[20px] md:text-[25px]">My Experience</h1>
                    <div className="grid gap-8 grid-cols-1">
                        {experiences.map((experience) => {
                            return (
                                <div key={experience._id} className="shadow-md border rounded-md p-4 max-w-[560px]">
                                    <p className="text-sm font-semibold text-white rounded-md bg-[#4a6cf8] inline-block px-1">{experience.startDate}-{experience.endDate}</p>
                                    <h1 className="mt-2 font-medium text-[23px]">{experience.faculty}</h1>
                                    <h6 className="mt-1 text-[15px]">{experience.organization}</h6>
                                    <p className="mt-2 text-[#959cb1] font-medium text-[14px]">{experience.short_description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume