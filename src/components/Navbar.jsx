import { useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"
import logo from '../assets/react.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Resume", path: "/resume" },
        // { name: "Contact", path: "/contact" },
    ]

    const socialLink = [
        { icon: "mdi:linkedin", link: "https://www.linkedin.com/in/mdtorky/" },
        { icon: "mdi:instagram", link: "https://www.instagram.com/mohdtorky/" },
        { icon: "ic:baseline-email", link: "mailto:mohamed2003torky@gmail.com" }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 z-50 ">
            <div className="lg:w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 shadow-sm rounded-b-xl">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
                            {/* <span className="text-2xl font-bold text-theme">Portfolio</span> */}
                            <img src={logo} alt="" />
                        </Link>
                    </div>


                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                                    ? "text-theme"
                                    : "text-darktheme hover:text-theme2"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="bg-darktheme text-white flex items-center text-2xl gap-1 p-1 rounded-sm">
                            {socialLink.map((link) => (
                                <button
                                    onClick={() => window.open(link.link, "_blank")}
                                    className="cursor-pointer hover:scale-120 duration-300"><Icon icon={link.icon} /></button>
                            ))}
                        </div>
                    </div>



                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-theme"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <Icon icon="tabler:x" width="24" height="24" />
                            ) : (
                                <Icon icon="tabler:menu-2" width="24" height="24" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-darktheme shadow-lg flex flex-col items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? "text-theme"
                                    : "text-white"
                                    }`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="text-white flex items-center text-2xl gap-1 p-1 rounded-sm">
                            {socialLink.map((link) => (
                                <button className="cursor-pointer hover:scale-120 duration-300"><Icon icon={link.icon} /></button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
