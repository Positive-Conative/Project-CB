import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    groupList: getGroupListResult[],
}

interface groupEvent {
    handleGroupExpand?: React.MouseEventHandler<HTMLDivElement>,
}

const LeftNevigationGroup = ({ groupList, handleGroupExpand }: props & groupEvent) => (
    <>
        {
            groupList?.map((it, idx) => <div key={idx}>
                <LeftNevigationItem {...it} handleGroupExpand={handleGroupExpand} />
                {/* <LeftNevigationItem data={item} depth={depth} /> */}
                {/* <Link to={'/d'}>+</Link> */}
                {/* <div onClick={handleExpandClick} data-idx={idx} ref={(element) => {
                    depthRef.current[idx] = element;
                }}>+</div>
                {it.groupName} */}
            </div>)
        }
    </>
);

const LeftNevigationItem = ({ subGroups, groupName, handleGroupExpand }: getGroupListResult & groupEvent) => {
    return <div>
        <div className='nav-group' onClick={handleGroupExpand}>
            {groupName}
        </div>
        <div className='nav-item'>
            <LeftNevigationGroup groupList={subGroups ?? []} handleGroupExpand={handleGroupExpand} />
        </div>
    </div>
    // return <>
    //     <div>
    //         <span style={{ paddingInlineStart: depth * 20 }}>{data.name}</span>
    //     </div>
    //     <div>
    //         <List data={data.directory ?? []} depth={depth + 1} />
    //     </div>
    // </>
}

export default LeftNevigationGroup;