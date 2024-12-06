import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import s from './Root.module.css'
const RootLayout = () => {
return <>
<MainNavigation/>
<main className={s.content}>
<Outlet/> 

</main>
</>
}

export default RootLayout;