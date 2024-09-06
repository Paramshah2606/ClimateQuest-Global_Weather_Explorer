import "./Navigation.css";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function Navigation(){
    return(
        <div className="nav">
            <div className="details">
                <div className="icon"><CloudQueueIcon/></div>
                <div className="title">ClimateQuest: Global Weather Explorer</div>
            </div>
            {/* <div className="menu"> */}
            <ul className="nav-list">
            <div className="menu">
                <div className="item"><li>Home</li></div>
                <div className="item"><li>Blog</li></div>
                <div className="item"><li>About Us</li></div>
                </div>
            </ul>
            {/* </div> */}
        </div>
    )
}