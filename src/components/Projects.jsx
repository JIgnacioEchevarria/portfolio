import turnsAppImage from '../assets/turns-app.png'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkIcon } from '../icons/LinkIcon'

export const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <h2>My Projects</h2>
            <ul className="projects-list">
                <li className="project">
                    <div className="project-info">
                        <h3>Turn Management System</h3>
                        <div className='project-links'>
                            <a className='project-repository' href="https://github.com/JIgnacioEchevarria/turns-app"><GithubIcon /></a>
                            <a className='project-demo' href="https://jieturns.vercel.app/"><LinkIcon /></a>
                        </div>
                        <p>Web application for managing turns in different industries, such as barbershops, beauty salons and other services that require an appointment.</p>
                        <ul className="project-technologies">
                            <li style={{ backgroundColor: '#539e43' }}>Node.js</li>
                            <li style={{ backgroundColor: '#00d8ff' }}>React</li>
                            <li style={{ backgroundColor: '#336791' }}>PostgreSQL</li>
                            <li style={{ backgroundColor: '#bd34fe' }}>Vite</li>
                        </ul>
                    </div>
                    <div className="project-image">
                        <a href='https://jieturns.vercel.app/' className='project-image-overlay'>
                            <p>View Demo</p>
                        </a>
                        <img src={turnsAppImage} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}
