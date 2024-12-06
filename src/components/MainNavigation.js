import { Link } from "react-router-dom";
import s  from './MainNavigation.module.css'
const MainNavigation = () => {
    return <header className={s.header}>
        <nav>
            <ul className={s.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation