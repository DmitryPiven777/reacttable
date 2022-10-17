import {Outlet} from "react-router";
import { NavLink } from "react-router-dom";

function Layout() {
    return (
        <div className="{'ap'}">
            <header className='app__header'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/counter'}>Counter</NavLink>
            </header>
            <main className='app__main'>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;