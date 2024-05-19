import "./Header.css";
import SampleLogo from "../../icons/SampleLogo.png";
import ShareIcon from "../../icons/ShareIcon";
import DownArrow from "../../icons/DownArrow";

const Header = () => {
  return (
    <div className="header">
      <img src={SampleLogo} alt="Company Logo" />
      <div className="menu-options">
        <p>
          Menu <DownArrow />
        </p>
        <p>Contact us</p>
        <span className="share-btn">
          <ShareIcon /> Share Link
        </span>
      </div>
    </div>
  );
};

export default Header;