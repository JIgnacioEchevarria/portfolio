import profileImage from '../assets/profile.png'
import { handleCopyEmail } from '../utils/email'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { GmailIcon } from '../icons/GmailIcon'

export const Presentation = () => {
    const handleDownloadCv = () => {
        const url = "https://drive.google.com/uc?export=download&id=19feTSgvH8yvQFhf19xDhLmHiacc8cab0";
        window.open(url, '_self')
    }

    return (
        <div className="presentation" id='presentation'>
            <div className="presentation-info">
                <ul className='list-contact-mobile'>
                    <li><a href="https://github.com/JIgnacioEchevarria"><GithubIcon /></a></li>
                    <li><a href="https://www.linkedin.com/in/jiechevarria/"><LinkedinIcon /></a></li>
                    <li>
                        <button onClick={handleCopyEmail} style={{ background: 'none', border: 'none', cursor: 'pointer' }} >
                            <GmailIcon />
                        </button>
                    </li>
                </ul>
                <h1>Juan Ignacio Echevarria</h1>
                <h2>BACKEND DEVELOPER</h2>
                <p>I am a Backend developer and a student at the National University of Central Buenos Aires (Unicen), where I am currently in my final year of the University Technician in Computer Application Development (TUDAI). I have a solid background in web application development and a deep understanding of relational databases. I am passionate about creating efficient and scalable solutions that enhance user experience and optimize system performance.</p>
                <button onClick={handleDownloadCv} className='btn-cv'>Download CV</button>
            </div>
            <div className="presentation-picture">
                <div className='profile-picture'>
                    <img src={profileImage} alt="feafe" />
                </div>
            </div>
        </div>
    )
}
