import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import skillsData from "../data/skills.json"
import SkillCard from "../components/SkillCard"
import profile from '../assets/Balto.jpg'

const About = () => {


    const myJourney = [
        { title: "Started Coding Journey", year: "2018", description: "Began learning HTML, CSS, and JavaScript through online courses and tutorials." },
        { title: "Computer Science Degree", year: "2019 - 2023", description: "Studied Computer Science at University Name, focusing on web development and software engineering." },
        { title: "First Developer Role", year: "2022", description: "Joined Company Name as a Junior Frontend Developer, working on various web applications." },
        { title: "Current Position", year: "2023 - Present", description: "Working as a Frontend Developer at Current Company, specializing in React and modern JavaScript frameworks." }

    ]

    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img
                                src={profile}
                                alt="Your Name"
                                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-darktheme">About Me</h1>
                            <p className="text-lg text-gray-600">
                                Hello! I'm Your Name, a passionate frontend developer based in Your Location. I enjoy creating things
                                that live on the internet, whether that be websites, applications, or anything in between.
                            </p>
                            <p className="text-lg text-gray-600">
                                My goal is to always build products that provide pixel-perfect, performant experiences. I am proficient
                                in HTML, CSS, JavaScript, React, and other modern frontend technologies.
                            </p>
                            <p className="text-lg text-gray-600">
                                When I'm not coding, you'll find me hiking, reading, or exploring new coffee shops in the city.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center px-6 py-3 bg-theme text-white font-medium rounded-md hover:bg-blue-400 transition-colors"
                                >
                                    Contact Me
                                    <Icon icon="tabler:arrow-right" width="18" height="18" className="ml-2" />
                                </Link>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center px-6 py-3 bg-theme2 hover:bg-red-800 text-white font-medium rounded-md  transition-colors"
                                >
                                    Download CV
                                    <Icon icon="tabler:download" width="18" height="18" className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-darktheme">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Skills</h2>
                        <p className="font-bold text-xl text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skillsData).map(([title, skills]) => (
                            <SkillCard key={title} title={title} skills={skills} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-darktheme ">My Journey</h2>
                        <p className="font-bold text-xl text-gray-600">How I got to where I am today</p>
                    </div>

                    <div className="relative border-l-4 border-theme ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-6 pb-6 space-y-10">

                        {myJourney.map((journey) => (
                            <div className="relative">
                                <div className="absolute -left-9.5 mt-1.5 h-6 w-6 rounded-full border-4 border-theme bg-white"></div>
                                <div className="bg-darktheme p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-white mb-2">{journey.title}</h3>
                                    <time className="text-sm font-medium text-theme mb-4 block">{journey.year}</time>
                                    <p className="text-gray-300">
                                        {journey.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-theme2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">Interested in working together?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        I'm currently available for freelance work or full-time positions. Let's build something amazing together!
                    </p>
                    <Link
                        className="inline-flex items-center px-6 py-3 bg-white text-theme2 font-medium rounded-md hover:bg-gray-300 transition-colors"
                        onClick={() => window.open(`http://wa.me/201554206775`, "_blank")}
                    >
                        Contact Me
                        <Icon icon="tabler:arrow-right" width="18" height="18" className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
