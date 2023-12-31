import { TbMenu } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Drawer = () => {
    return (
        <div className='z-50'>
            <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button rounded-full btn "><TbMenu /></label>
                </div>
                <div className="drawer-side overflow-hidden">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <p className="text-2xl">Menu</p>
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <NavLink>Home</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;