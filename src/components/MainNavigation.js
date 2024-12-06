import { NavLink } from "react-router-dom";
import s  from './MainNavigation.module.css'
const MainNavigation = () => {
    return <header className={s.header}>
        <nav>
            <ul className={s.list}>
                <li>
                    <NavLink to='/' className={({isActive}) => (isActive ? s.active : undefined) }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products' className={({isActive}) => (isActive ? s.active : undefined) }>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation