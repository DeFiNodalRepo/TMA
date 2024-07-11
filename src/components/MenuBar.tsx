import { MdDashboard } from "react-icons/md";
import { FaVault } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { GiThreeFriends } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function MenuBar() {
  return (
    <div className='flex justify-center'>
      <div className="flex divide-x divide-gray-700 overflow-hidden rounded-lg border border-gray-700 bg-gray-900">
        <NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-700" : ""}>
          <button className="flex flex-col items-center gap-x-3 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-200">
            <MdDashboard size={25} />
            <span>Dashboard</span>
          </button>
        </NavLink>

        <NavLink to="/vaults" className={({ isActive }) => isActive ? "bg-gray-700" : ""}>
          <button className="flex flex-col items-center gap-x-3 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-200">
            <FaVault size={25} />
            <span>Vaults</span>
          </button>
        </NavLink>

        <NavLink to='/missions' className={({ isActive }) => isActive ? "bg-gray-700" : ""}>
          <button className="flex flex-col items-center gap-x-3 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-200">
            <FiTarget size={25} />
            <span>Missions</span>
          </button>
        </NavLink>

        <NavLink to="/referrals" className={({ isActive }) => isActive ? "bg-gray-700" : ""}>
          <button className="flex flex-col items-center gap-x-3 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-200">
            <GiThreeFriends size={25} />
            <span>Friends</span>
          </button>
        </NavLink>

      </div>
    </div >
  )
}

export default MenuBar