"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../data/projects.json"

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [activeFilter, setActiveFilter] = useState("All")

    useEffect(() => {
        setProjects(projectsData)
        setFilteredProjects(projectsData)
    }, [])

    const filterCategories = ["All", "Web", "Mobile", "Design", "Other"]

    const handleFilterChange = (category) => {
        setActiveFilter(category)

        if (category === "All") {
            setFilteredProjects(projects)
        } else {
            const filtered = projects.filter((project) => project.category.toLowerCase() === category.toLowerCase())
            setFilteredProjects(filtered)
        }
    }

    return (
        <div className="bg-darktheme">
            {/* Hero Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A collection of my recent work, personal projects, and experiments. Each project is a unique piece of
                        development.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filterCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterChange(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeFilter === category
                                    ? "bg-theme text-white"
                                    : "bg-gray-800 text-white hover:bg-gray-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
                        ) : (
                            <div className="col-span-full text-center py-12 w-fit m-auto">
                                <p className="text-xl text-white bg-theme2 p-2 rounded-lg">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
