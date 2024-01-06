import './style.css';
import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";
import MainNevigationGroup from "./Main-Navigation-Group";
import UserProfile from './User-Profile';

interface props {
    // navRef?: React.MutableRefObject<HTMLElement>,
    navRef: React.RefObject<HTMLElement>,
    groupList: getGroupListResult[],
    handleNavExpand: React.MouseEventHandler<HTMLDivElement>,
    handleGroupExpand: React.MouseEventHandler<HTMLDivElement>,
    // handleExpandClick: () => Promise<getGroupListResult[]>
}

const LeftNevigationView = ({ navRef, groupList, handleNavExpand, handleGroupExpand }: props) => (
    <nav className='main-nevigation open' ref={navRef}>
        <div className="expand-btn" onClick={handleNavExpand}>
            open]
        </div>
        <UserProfile />
        <hr />
        <MainNevigationGroup {...{
            groupList,
            handleGroupExpand,
            depth: 0,
        }} />
    </nav>
);

export default LeftNevigationView;