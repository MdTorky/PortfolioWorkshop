"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                />
                <div
                    className={`absolute inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="flex space-x-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-theme hover:text-white transition-colors"
                                aria-label="View GitHub repository"
                            >
                                <Icon icon="tabler:brand-github" width="20" height="20" />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-theme hover:text-white transition-colors"
                                aria-label="View live demo"
                            >
                                <Icon icon="tabler:external-link" width="20" height="20" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-darktheme">{project.title}</h3>
                    <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-theme text-white">
                        {project.year}
                    </span>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium px-2.5 py-0.5 rounded text-white bg-darktheme "
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
