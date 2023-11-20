import { Link } from "react-router-dom"
import { getGroupListResult } from "../../../../interfaces/groupType";
import LeftNevigationDepth from "./Left-Navigation-Depth";

interface props {
    depthRef: React.MutableRefObject<HTMLDivElement[] | null[]>,
    groupList?: getGroupListResult[],
    handleExpandClick?: React.MouseEventHandler<HTMLDivElement>
    // handleExpandClick: () => Promise<getGroupListResult[]>
}


const LeftNevigationView = ({ depthRef, groupList, handleExpandClick }: props) => (
    <div>
        hello...
        {/* <LeftNevigationDepth {...{ depthRef, groupList, handleExpandClick }} /> */}
        {
            groupList?.map((it, idx) => <div key={idx}>
                {/* <Link to={'/d'}>+</Link> */}
                <div onClick={handleExpandClick} data-idx={idx} ref={(element) => {
                    depthRef.current[idx] = element;
                }}>+</div>
                {it.groupName}
            </div>)
        }
    </div>
);

export default LeftNevigationView;