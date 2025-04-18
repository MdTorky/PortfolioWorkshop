import { useContext } from "react"
import socialData from "../data/social.json"
import { Icon } from "@iconify/react"

const Footer = () => {
    return (
        <footer className="bg-darktheme py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-300">
                            &copy; 2025 Your Name. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        {socialData.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-gray-400 hover:text-theme hover:scale-150 transition duration-300 ease-in-out"
                                aria-label={item.name}
                            >
                                <Icon icon={item.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
