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
            groupList?.map((it, idx) => <div key={it.groupIdx}>
                <LeftNevigationGroupItem {...it} {...{
                    handleGroupExpand,
                    depth,
                }} />
            </div>)
        }
    </>
);

const LeftNevigationGroupItem = ({ subGroups, groupName, handleGroupExpand, depth }: getGroupListResult & groupEvent) => {
    // style={{ paddingInlineStart: depth * 20 }}>
    return <div className='nav-group-wrapper' >
        <div className='nav-group' onClick={handleGroupExpand}>
            <div className='expand-navigator'></div>
            {groupName}
        </div>
        <div className='nav-item'>
            <LeftNevigationGroup groupList={subGroups ?? []} handleGroupExpand={handleGroupExpand} depth={depth + 1} />
        </div>
    </div >
}

export default LeftNevigationGroup;