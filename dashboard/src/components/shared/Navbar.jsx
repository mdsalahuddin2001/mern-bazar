import { FaAlignLeft } from "react-icons/fa";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, toggleSidebar } from "../../features/utils/utilsSlice";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.utils.isDarkMode);
  const dispatch = useDispatch();

  //   toggle sidebar
  const handleToggleSidebar = () => dispatch(toggleSidebar());

  // handle toggle dark mode
  const handleToggleDarkMode = () => dispatch(toggleDarkMode());
  return (
    <nav className="h-[80px] border-b flex items-center">
      <div className="flex items-center justify-between px-4  w-full">
        <button
          className="toggle-btn"
          type="button"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft className="text-primary" />
        </button>
        <div className="space-x-4">
          <button onClick={handleToggleDarkMode}>
            {isDarkMode ? (
              <BsSunFill className="text-white" />
            ) : (
              <BsFillMoonFill className="text-textPrimary" />
            )}
          </button>
          <button>
            <FiLogIn
              className={isDarkMode ? "text-white" : "text-textPrimary"}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
