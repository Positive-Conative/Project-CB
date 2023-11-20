import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";

interface props {
    depthRef: React.MutableRefObject<HTMLDivElement[] | null[]>,
    groupList?: getGroupListResult[],
    handleExpandClick?: React.MouseEventHandler<HTMLDivElement>
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationDepth = ({ depthRef, groupList, handleExpandClick }: props) => (
    <div>
        {
            groupList?.map((it, idx) => <div key={idx}>
                {/* <Link to={'/d'}>+</Link> */}
                <div onClick={handleExpandClick} data-idx={it.groupIdx}>+</div>
                {it.groupName}
            </div>)
        }
    </div>
);

export default LeftNevigationDepth;