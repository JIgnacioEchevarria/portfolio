import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"
import { GmailIcon } from "../icons/GmailIcon"
import { handleCopyEmail } from "../utils/email"

export const Header = () => {
    const scrollToSection = (id) => {
        if (id === 'presentation') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const section = document.getElementById(id)
            section.scrollIntoView({ behavior: 'smooth', block:'start' })
        }
    }

    return (
        <header>
            <ul className="nav-menu nav-menu-sections">
                <li onClick={() => scrollToSection('presentation')}>Home</li>
                <li onClick={() => scrollToSection('technologies')}>Technologies</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
            </ul>
            <ul className="nav-menu nav-menu-contact">
                <li><a href="https://github.com/JIgnacioEchevarria"><GithubIcon /></a></li>
                <li><a href="https://www.linkedin.com/in/jiechevarria/"><LinkedinIcon /></a></li>
                <li>
                    <button onClick={handleCopyEmail} style={{ background: 'none', border: 'none', cursor: 'pointer' }} >
                        <GmailIcon />
                    </button>
                </li>
            </ul>
        </header>
    )
}
