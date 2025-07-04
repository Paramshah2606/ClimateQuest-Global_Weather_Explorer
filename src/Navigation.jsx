import "./Navigation.css";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function Navigation() {
  return (
    <nav className="nav-glass">
      <div className="nav-content">
        <div className="nav-brand">
          <CloudQueueIcon className="nav-icon" />
          <span className="nav-title">ClimateQuest: Global Weather Explorer</span>
        </div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">Blog</li>
          <li className="nav-link">About Us</li>
        </ul>
      </div>
    </nav>
  );
}
