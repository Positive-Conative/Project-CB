import './style.css';
import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";
import MainNevigationGroup from "./Main-Navigation-Group";
import UserProfile from './User-Profile';

interface props {
    // navRef?: React.MutableRefObject<HTMLElement>,
    navRef: React.RefObject<HTMLElement>,
    handleNavExpand: React.MouseEventHandler<HTMLDivElement>,
    groupList: getGroupListResult[],
    // handleExpandClick: () => Promise<getGroupListResult[]>
}

const LeftNevigationView = ({ navRef, handleNavExpand, groupList }: props) => (
    <nav className='main-nevigation open' ref={navRef}>
        <div className="expand-btn" onClick={handleNavExpand}>
            open]
        </div>
        <UserProfile />
        <MainNevigationGroup groupList={groupList} />
    </nav>
);

export default LeftNevigationView;