import { NodeIcon } from '../icons/NodeIcon'
import { JavaIcon } from '../icons/JavaIcon'
import { SpringIcon } from '../icons/SpringIcon'
import { MysqlIcon } from '../icons/MysqlIcon'
import { PostgresIcon } from '../icons/PostgresIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { JavascriptIcon } from '../icons/JavascriptIcon'
import { GithubIconWithTitle } from '../icons/GithubIconWithTitle'

export const Technologies = () => {
    return (
        <div className="technologies-container" id='technologies'>
            <h2>Some Technologies I Use</h2>
            <ul className="technologies-list">
                <li><NodeIcon /></li>
                <li><JavaIcon /></li>
                <li><SpringIcon /></li>
                <li><MysqlIcon /></li>
                <li><PostgresIcon /></li>
                <li><ReactIcon /></li>
                <li><JavascriptIcon /></li>
                <li><GithubIconWithTitle /></li>
            </ul>
        </div>
    )
}
