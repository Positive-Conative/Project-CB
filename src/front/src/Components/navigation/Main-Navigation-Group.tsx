import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    groupList: getGroupListResult[],
}

interface groupEvent {
    depth: number,
    handleGroupExpand?: React.MouseEventHandler<HTMLDivElement>,
}

const LeftNevigationGroup = ({ groupList, handleGroupExpand, depth }: props & groupEvent) => (
    <>
        {
            groupList?.map((it, idx) => <div key={idx}>
                <LeftNevigationItem {...it} handleGroupExpand={handleGroupExpand} depth={depth} />
            </div>)
        }
    </>
);

const LeftNevigationItem = ({ subGroups, groupName, handleGroupExpand, depth }: getGroupListResult & groupEvent) => {
    return <div style={{ paddingInlineStart: depth * 20 }}>
        <div className='nav-group' onClick={handleGroupExpand}>
            {groupName}
        </div>
        <div className='nav-item'>
            <LeftNevigationGroup groupList={subGroups ?? []} handleGroupExpand={handleGroupExpand} depth={depth + 1} />
        </div>
    </div>
}

export default LeftNevigationGroup;