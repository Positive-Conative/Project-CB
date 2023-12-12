import './style.css';
import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";
import MainNevigationGroup from "./Main-Navigation-Group";

interface props {
    // navRef?: React.MutableRefObject<HTMLElement>,
    navRef?: React.RefObject<HTMLElement>,
    handleNavExpand?: React.MouseEventHandler<HTMLDivElement>,
    groupList: getGroupListResult[],
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationView = ({ navRef, handleNavExpand, groupList }: props) => (
    <nav className='main-neviation' ref={navRef}>
        <div className="close-btn" onClick={handleNavExpand}>x</div>
        <MainNevigationGroup groupList={groupList} />
    </nav>
);

export default LeftNevigationView;