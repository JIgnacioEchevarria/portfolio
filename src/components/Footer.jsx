import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"
import { GmailIcon } from "../icons/GmailIcon"
import { handleCopyEmail } from "../utils/email"

export const Footer = () => {
    return (
        <footer>
            <h2>Juan Ignacio Echevarria</h2>
            <ul className="nav-menu-footer">
                <li><a href="https://github.com/JIgnacioEchevarria"><GithubIcon /></a></li>
                <li><a href="https://www.linkedin.com/in/jiechevarria/"><LinkedinIcon /></a></li>
                <li>
                    <button onClick={handleCopyEmail} style={{ background: 'none', border: 'none', cursor: 'pointer' }} >
                        <GmailIcon />
                    </button>
                </li>
            </ul>
        </footer>
    )
}
