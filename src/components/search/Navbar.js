import SearchBar from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { closePopup, clickPopup } from "../features/popUpSlice";
import { logout, reset } from "../features/auth/authSlice";
import { openSidebar } from "../features/sidebarSlice";
import { chooseSidebar } from "../features/sidebarShowSlice";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { notificationDB } from "../../firebase";
import NotificationPane from "./NotificationPane";
import BellButton from "./BellButton";

const Navbar = (props) => {
  const { setPlaceId, setPlaceDetails, setShowWidget, isLoaded } = props;
  const [notifications, setNotification] = useState([]);
  const [showNoti, setNoti] = useState(false);
  const [showPane, setShowPane] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.popupSignInOut);
  const { user } = useSelector((state) => state.authStore);

  const popupPage = (page) => {
    dispatch(clickPopup(page));
  };

  const sidebarPage = (page) => {
    dispatch(openSidebar(page));
  };

  const chooseSidebarPage = (page) => {
    dispatch(chooseSidebar(page));
  };

  // Logout
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleShowPane = () => {
    if (showPane) {
      setShowPane(false);
    } else {
      setShowPane(true);
    }
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-around px-2 py-8">
      <SearchBar
        setPlaceDetails={setPlaceDetails}
        setPlaceId={setPlaceId}
        setShowWidget={setShowWidget}
        isLoaded={isLoaded}
      />
      {user ? (
        <div className="flex items-center">
          <Link to={`/account`} target="_blank" rel="noopener noreferrer">
            {user.user.u_username}
          </Link>
          <button
            className="px-3 py-2 mx-2 my-1 hover:bg-white/50 bg-pink-600 rounded-lg font-['SarabunBold'] text-lg"
            onClick={() => {
              chooseSidebarPage("AddResidence");
              sidebarPage(true);
            }}>
            Add Resident
          </button>

          <button
            className="px-3 py-2 mx-2 my-1 hover:bg-pink-600 rounded-lg bg-white/50 text-white font-['SarabunBold'] text-lg"
            onClick={() => onLogout()}>
            Sign Out
          </button>
          <div className="relative h-8 w-8">
            <BellButton
              handleShowPane={handleShowPane}
              showNoti={showNoti}
              user={user}
              setNoti={setNoti}
              setNotification={setNotification}
              notifications={notifications}
              showPane={showPane}
            />
          </div>
          {showPane && <NotificationPane notifications={notifications} />}
        </div>
      ) : (
        <div>
          <button
            className="px-3 py-2 mx-2 my-1 hover:bg-pink-600 rounded-lg bg-white/50 text-white font-['SarabunBold'] text-lg"
            onClick={() => {
              popupPage("SignIn");
            }}>
            SignIn
          </button>

          <button
            className="px-3 py-2 mx-2 my-1 hover:bg-white/50 bg-pink-600 rounded-lg font-['SarabunBold'] text-lg"
            onClick={() => {
              popupPage("SignUp");
            }}>
            SignUp
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
