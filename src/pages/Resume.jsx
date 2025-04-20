import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import ExperienceCard from "../components/ExperienceCard"
import EducationCard from "../components/EducationCard"
import experienceData from "../data/experience.json"
import educationData from "../data/education.json"

const Resume = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-20 bg-darktheme">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 uppercase">Resume</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        My professional background, work experience, and education
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-theme2 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
                    >
                        Download CV
                        <Icon icon="tabler:download" width="18" height="18" className="ml-2" />
                    </a>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-darktheme mb-8">Work Experience</h2>

                    <div className="space-y-6">
                        {experienceData.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-12 bg-darktheme">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-white mb-8">Education</h2>

                    <div className="space-y-6">
                        {educationData.map((education) => (
                            <EducationCard key={education.id} education={education} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-darktheme mb-8">Skills & Expertise</h2>

                    <div className="flex flex-1 lg:flex-row flex-col gap-6">
                        <div className="flex-1 bg-darktheme rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-200">HTML & CSS</span>
                                        <span className="text-sm font-medium text-gray-200">95%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                                        <div className="bg-theme h-2.5 rounded-full" style={{ width: "95%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-200">JavaScript</span>
                                        <span className="text-sm font-medium text-gray-200">90%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                                        <div className="bg-theme h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-200">React</span>
                                        <span className="text-sm font-medium text-gray-200">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                                        <div className="bg-theme h-2.5 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-200">Node.js</span>
                                        <span className="text-sm font-medium text-gray-200">80%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                                        <div className="bg-theme h-2.5 rounded-full" style={{ width: "80%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-darktheme rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Problem Solving
                                </li>
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Communication
                                </li>
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Teamwork
                                </li>
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Time Management
                                </li>
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Adaptability
                                </li>
                                <li className="flex items-center">
                                    <Icon icon="tabler:circle-check" className="w-4 h-4 mr-2 text-theme" />
                                    Creativity
                                </li>
                            </ul>
                        </div>
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
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 bg-white text-theme2 font-medium rounded-md hover:bg-gray-300 transition-colors"
                    >
                        Contact Me
                        <Icon icon="tabler:arrow-right" width="18" height="18" className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Resume
