import { Link } from 'react-router-dom';
import { getGroupListResult } from '../../../../../interfaces/groupType';
import { MouseEvent, useState } from 'react';

interface props {
    groupList: getGroupListResult[];
}

interface groupEvent {
    depth: number;
}

const GroupExpandView = ({ groupList, depth }: props & groupEvent) => (
    <>
        {groupList?.map((it, idx) => (
            <div key={it.groupIdx}>
                <GroupExpandItemView {...it} depth={depth} />
            </div>
        ))}
    </>
);

const GroupExpandItemView = ({ subGroups, groupName, groupIdx, depth }: getGroupListResult & groupEvent) => {
    const [expand, setExpand] = useState(false);
    const handleGroupExpand = (e: MouseEvent) => {
        e.preventDefault();
        setExpand(!expand);
    };

    // style={{ paddingInlineStart: depth * 20 }}>
    return (
        <div className="nav-group-wrapper">
            <div className={`nav-group ${expand ? 'expand' : ''}`}>
                <div className="expand-navigator" onClick={handleGroupExpand}></div>
                <Link to={`/groups/${groupIdx}`}>
                    {groupName} {groupIdx}
                </Link>
            </div>
            <div className="nav-item">
                <GroupExpandView groupList={subGroups ?? []} depth={depth + 1} />
            </div>
        </div>
    );
};

export default GroupExpandView;
