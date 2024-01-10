import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByType } from "../../features/jobs/jobSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              onClick={() => dispatch("all")}
              style={{ cursor: "pointer" }}
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-2 ">
              <li onClick={() => dispatch(filterByType("Internship"))}>
                <button className="sub-menu" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </button>
              </li>
              <li onClick={() => dispatch(filterByType("Full Time"))}>
                <button className="sub-menu" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </button>
              </li>
              <li onClick={() => dispatch(filterByType("Remote"))}>
                <button className="sub-menu" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/create-new-job"}
              className="main-menu"
              id="lws-addJob-menu"
            >
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
