import work1 from "./assets/work-1.jpg"
import work2 from "./assets/work-2.jpg"
import work3 from "./assets/work-3.jpg"
import work4 from "./assets/work-4.jpg"

import support11 from "./assets/support1-1.svg"
import support21 from "./assets/support2-1.svg"
import support31 from "./assets/support3-1.svg"
import support41 from "./assets/support4-1.svg"

import photo1 from "./assets/photo1.png"
import photo2 from "./assets/photo2.png"
import photo3 from "./assets/photo3.png"
import photo4 from "./assets/photo4.png"

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import { TbUserSearch } from 'react-icons/tb'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { HiUserGroup } from 'react-icons/hi'
import { SiProtonvpn } from 'react-icons/si'

export const services = [
    {
        id: 1,
        logo:TbUserSearch,
        title: "User Research",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
        id: 2,
        logo:AiOutlineAntDesign,
        title: "Virtual Design",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
        id: 3,
        logo:HiUserGroup,
        title: "User Testing",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    },
    {
        id: 4,
        logo:SiProtonvpn,
        title: "Prototype",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.",
    }
]


export const works = [
    {
        id: 1,
        image: work1,
        title: "Startup landing page",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
    },
    {
        id: 1,
        image: work2,
        title: "Job portal landing page",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
    },
    {
        id: 1,
        image: work3,
        title: "SaaS landing page",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
    },
    {
        id: 1,
        image: work4,
        title: "Business & corporate template",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero."
    }
]

export const educations = [
    {
        id: 1,
        startDate: 2011,
        endDate: 2022,
        faculty: "High School",
        organization: "113 No School",
        short_description: "Secondary school No. 113 in Kurdakhani settlement of Baku city has been operating since 1927. The current building of the school was built and put into use in 1971. The school has 850 seats. In 2008, an auxiliary building with 300 seats was built in the school yard."
    },
    {
        id: 2,
        startDate: 2022,
        endDate: 2025,
        faculty: "Computer Systems",
        organization: "Riga Technical University",
        short_description: "Riga Technical University (RTU) (Latvian: Rīgas Tehniskā universitāte) is the oldest technical university in the Baltic countries established on October 14, 1862. It is located in Riga, Latvia and was previously known as 'Riga Polytechnical Institute' and 'Riga Polytechnicum'."
    }
]


export const experiences = [
    {
        id: 1,
        startDate: 2019,
        endDate: 2020,
        faculty: "Web Developer",
        organization: "Smart It School",
        short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum voluptas debitis necessitatibus nulla fuga nemo blanditiis provident, incidunt, nobis facere. Adipisci amet animi aut eius mollitia voluptas placeat modi."
    },
]

export const feedbacks = [
    {
        id: 1,
        companyLogo: support11,
        image: photo1,
        fullName: "Musharof Chy",
        company: "Founder @ Linelcons",
    },
    {
        id: 2,
        companyLogo: support21,
        image: photo2,
        fullName: "Musharof Chy",
        company: "Founder @ Linelcons",
    },
    {
        id: 3,
        companyLogo: support31,
        image: photo3,
        fullName: "Musharof Chy",
        company: "Founder @ Linelcons",
    },
    {
        id: 4,
        companyLogo: support41,
        image: photo4,
        fullName: "Musharof Chy",
        company: "Founder @ Linelcons",
    }
]

export const blogs = [
    {
        id: 1,
        image: blog1,
        title: "UI/UX Design Trend 2024",
        short_description: "Automate your Business for more results, Creating Business that."
    },
    {
        id: 2,
        image: blog2,
        title: "Tips for Graphics Design",
        short_description: "Automate your Business for more results, Creating Business that."
    },
    {
        id: 3,
        image: blog3,
        title: "Creative Web Design",
        short_description: "Automate your Business for more results, Creating Business that."
    }
]