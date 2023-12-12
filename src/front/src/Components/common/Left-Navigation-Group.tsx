import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    depthRef?: React.MutableRefObject<HTMLDivElement[] | null[]>,
    groupList?: getGroupListResult[],
    handleExpandClick?: React.MouseEventHandler<HTMLDivElement>
    // handleExpandClick: () => Promise<getGroupListResult[]>
}

const dumyGroupList = [
    {

    }
]

const LeftNevigationGroup = ({ groupList }: props) => (
    <div>
        {
            groupList?.map((it, idx) => <div key={idx}>
                <LeftNevigationItem {...it} />
                {/* <LeftNevigationItem data={item} depth={depth} /> */}
                {/* <Link to={'/d'}>+</Link> */}
                {/* <div onClick={handleExpandClick} data-idx={idx} ref={(element) => {
                    depthRef.current[idx] = element;
                }}>+</div>
                {it.groupName} */}
            </div>)
        }
    </div>
);

const LeftNevigationItem = ({ subGroups, groupName }: getGroupListResult) => {
    return <div>
        <div>
            <span >{groupName}</span>
        </div>
        <div>
            <LeftNevigationGroup groupList={subGroups ?? []} />
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