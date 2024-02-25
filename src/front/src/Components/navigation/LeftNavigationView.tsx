import './style.css';
import { getGroupListResult } from '../../../../interfaces/groupType';
import UserProfileView from './UserProfileView';
import GroupExpandView from './GroupExpandView';

interface props {
    // navRef?: React.MutableRefObject<HTMLElement>,
    navRef: React.RefObject<HTMLElement>;
    groupList: getGroupListResult[];
    handleNavExpand: React.MouseEventHandler<HTMLDivElement>;
    // handleExpandClick: () => Promise<getGroupListResult[]>
}

const LeftNevigationView = ({ navRef, groupList, handleNavExpand }: props) => (
    <nav className="main-nevigation open" ref={navRef}>
        <div className="expand-btn" onClick={handleNavExpand}>
            open]
        </div>
        <UserProfileView />
        <hr />
        <GroupExpandView groupList={groupList} depth={0} />
    </nav>
);

export default LeftNevigationView;
